import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';
import { FaLock, FaUserShield, FaChartPie, FaChartBar, FaExclamationTriangle, FaCheckCircle, FaUser, FaKey, FaHistory } from 'react-icons/fa';

const API_BASE = 'https://api.rugcheck.xyz/v1/tokens';

function getScoreColor(score: number) {
  if (score >= 80) return 'bg-green-500';
  if (score >= 50) return 'bg-yellow-400';
  if (score > 0) return 'bg-orange-400';
  return 'bg-red-500';
}

function getRiskColor(level: string) {
  switch (level?.toLowerCase()) {
    case 'high': return 'text-red-500';
    case 'medium': return 'text-yellow-400';
    case 'low': return 'text-green-500';
    default: return 'text-muted';
  }
}

function shorten(addr: string, len = 6) {
  if (!addr) return '';
  return addr.length > len * 2 ? addr.slice(0, len) + '...' + addr.slice(-len) : addr;
}

function formatDate(ts: string | number) {
  if (!ts) return '';
  const d = new Date(Number(ts) || ts);
  return d.toLocaleString();
}

const HOLDER_COLORS = ['#1de9b6', '#00bfae', '#ff5252', '#ffd600', '#2979ff', '#b388ff', '#00e676', '#ff9100', '#ff3d00', '#00b8d4'];

const Card = ({ children, className = '', accent = 'accent2', icon }: any) => (
  <div className={`relative bg-gradient-to-br from-background via-card to-background border border-${accent} rounded-2xl shadow-lg p-6 flex flex-col gap-2 ${className} transition-all duration-300 hover:shadow-2xl`}>
    {icon && <div className={`absolute -top-6 left-4 bg-background border-2 border-${accent} rounded-full p-2 shadow-lg text-2xl text-${accent}`}>{icon}</div>}
    {children}
  </div>
);

const ErosInvestigator: React.FC = () => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [report, setReport] = useState<any>(null);

  const fetchReport = async () => {
    setLoading(true);
    setError('');
    setReport(null);
    try {
      const res = await fetch(`${API_BASE}/${address}/report`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setReport(data);
      }
    } catch (err) {
      setError('Failed to fetch report.');
    }
    setLoading(false);
  };

  function VerificationBadges({ verification }: { verification: any }) {
    if (!verification) return null;
    return (
      <div className="flex gap-2 items-center mt-2">
        {verification.jup_verified && (
          <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><FaCheckCircle /> Jupiter Verified</span>
        )}
        {verification.jup_strict && (
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1"><FaUserShield /> Jupiter Strict</span>
        )}
        {verification.links && verification.links.map((l: any, i: number) => (
          <a key={i} href={l.value} target="_blank" rel="noopener noreferrer" className="underline text-xs text-accent">{l.provider}</a>
        ))}
      </div>
    );
  }

  function getTotalLocked(lockers: any) {
    if (!lockers) return 0;
    return Object.values(lockers).reduce((sum: number, l: any) => sum + (l.usdcLocked || 0), 0);
  }

  // Pie chart data for holders
  const holdersPieData = report?.topHolders?.length
    ? report.topHolders.slice(0, 8).map((h: any, i: number) => ({
        name: shorten(h.address),
        value: h.pct || 0,
        insider: h.insider,
      })).concat([
        { name: 'Other', value: 100 - report.topHolders.slice(0, 8).reduce((a: number, h: any) => a + (h.pct || 0), 0) }
      ])
    : [];

  // Bar chart data for market liquidity
  const marketBarData = report?.markets?.length
    ? report.markets.map((m: any) => ({
        name: m.marketType || shorten(m.pubkey),
        liquidityA: Number(m.liquidityA) || 0,
        liquidityB: Number(m.liquidityB) || 0,
        lpLockedUSD: m.lp?.lpLockedUSD || 0,
      }))
    : [];

  return (
    <div className="w-full max-w-7xl mx-auto py-12 flex flex-col">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-accent2 mb-2 tracking-wide">EROS INVESTIGATOR</h2>
        <p className="text-muted text-lg">Enter a token mint address to generate a detailed, actionable dashboard using RugCheck API.</p>
      </div>
      <div className="flex gap-2 mb-10">
        <input
          className="flex-1 px-6 py-3 rounded-xl border border-border bg-background text-text focus:outline-none text-lg shadow-md"
          type="text"
          placeholder="Token mint address..."
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <button
          className="bg-accent2 text-heading px-8 py-3 rounded-xl font-bold hover:bg-accent transition text-lg shadow-md"
          onClick={fetchReport}
          disabled={!address || loading}
        >
          {loading ? 'Loading...' : 'Fetch Report'}
        </button>
      </div>
      {error && <Card accent="accent4" className="mb-4"><div className="text-red-500 font-bold">{error}</div></Card>}
      {report && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Overview Card */}
          <Card accent="accent2" icon={<FaChartPie />} className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold text-accent2 flex items-center gap-2">{report.tokenMeta?.name || report.fileMeta?.name || 'Unknown Token'} <span className="text-base text-muted">({report.tokenMeta?.symbol || report.fileMeta?.symbol || ''})</span></div>
              <div className="text-lg text-muted">Mint: <span className="font-mono text-xs">{report.mint}</span></div>
              <VerificationBadges verification={report.verification} />
              <div className="flex flex-wrap gap-4 mt-4 items-center">
                <div className="text-3xl font-bold">${report.price?.toLocaleString(undefined, { maximumFractionDigits: 8 }) || 'N/A'}</div>
                <div className="flex items-center gap-2">
                  <span className={`inline-block w-10 h-10 rounded-full ${getScoreColor(report.score_normalised)} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>{Math.round(report.score_normalised ?? 0)}</span>
                  <span className="text-xs text-muted">Score</span>
                </div>
                {report.rugged !== undefined && (
                  report.rugged ? (
                    <span className="flex items-center gap-1 text-red-500 font-bold text-lg"><FaExclamationTriangle /> Potential Rug Pull</span>
                  ) : (
                    <span className="flex items-center gap-1 text-green-500 font-bold text-lg"><FaCheckCircle /> No Rug Pull Detected</span>
                  )
                )}
              </div>
            </div>
          </Card>

          {/* Market Liquidity Card */}
          <Card accent="accent3" icon={<FaChartBar />} className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-accent3 mb-2"><FaChartBar /> Market Liquidity</div>
              <div className="mb-2 text-lg">Total Market Liquidity: <span className="font-bold">${report.totalMarketLiquidity?.toLocaleString(undefined, { maximumFractionDigits: 2 }) || 'N/A'}</span></div>
              {marketBarData.length > 0 && (
                <div className="w-full h-56 mb-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marketBarData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <XAxis dataKey="name" stroke="#1de9b6" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Legend />
                      <RechartsTooltip />
                      <Bar dataKey="liquidityA" fill="#1de9b6" name="Liquidity A" />
                      <Bar dataKey="liquidityB" fill="#ff5252" name="Liquidity B" />
                      <Bar dataKey="lpLockedUSD" fill="#ffd600" name="LP Locked USD" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
              {report.markets && report.markets.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-border rounded-lg">
                    <thead>
                      <tr className="bg-background text-accent2">
                        <th className="px-2 py-1">Market</th>
                        <th className="px-2 py-1">Liquidity A</th>
                        <th className="px-2 py-1">Liquidity B</th>
                        <th className="px-2 py-1">LP Locked USD</th>
                        <th className="px-2 py-1">LP Locked %</th>
                        <th className="px-2 py-1">LP Supply</th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.markets.map((m: any, idx: number) => (
                        <tr key={idx} className="border-t border-border">
                          <td className="px-2 py-1 font-mono">{m.marketType || shorten(m.pubkey)}</td>
                          <td className="px-2 py-1">{m.liquidityA}</td>
                          <td className="px-2 py-1">{m.liquidityB}</td>
                          <td className="px-2 py-1">${m.lp?.lpLockedUSD?.toLocaleString(undefined, { maximumFractionDigits: 2 }) || 'N/A'}</td>
                          <td className="px-2 py-1">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-background rounded-full overflow-hidden">
                                <div className="h-2 rounded-full bg-accent3" style={{ width: m.lp?.lpLockedPct ? `${m.lp.lpLockedPct}%` : '0%' }} />
                              </div>
                              <span>{m.lp?.lpLockedPct ? m.lp.lpLockedPct + '%' : 'N/A'}</span>
                            </div>
                          </td>
                          <td className="px-2 py-1">{m.lp?.lpCurrentSupply || 'N/A'} / {m.lp?.lpTotalSupply || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Card>

          {/* Holders & Distribution Card */}
          <Card accent="accent" icon={<FaUser />} className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-accent mb-2"><FaUser /> Holders & Distribution</div>
              <div className="mb-2 text-lg">Total Holders: <span className="font-bold">{report.totalHolders?.toLocaleString() || 'N/A'}</span></div>
              {holdersPieData.length > 1 && (
                <div className="w-full h-48 mb-2 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={holdersPieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={70}
                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                      >
                        {holdersPieData.map((entry: any, idx: number) => (
                          <Cell key={`cell-${idx}`} fill={HOLDER_COLORS[idx % HOLDER_COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )}
              {report.topHolders && report.topHolders.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-border rounded-lg">
                    <thead>
                      <tr className="bg-background text-accent2">
                        <th className="px-2 py-1">Address</th>
                        <th className="px-2 py-1">Amount</th>
                        <th className="px-2 py-1">%</th>
                        <th className="px-2 py-1">Insider</th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.topHolders.map((h: any, idx: number) => (
                        <tr key={idx} className="border-t border-border">
                          <td className="px-2 py-1 font-mono">{shorten(h.address)}</td>
                          <td className="px-2 py-1">{h.amount}</td>
                          <td className="px-2 py-1">{h.pct ? h.pct + '%' : 'N/A'}</td>
                          <td className="px-2 py-1">{h.insider ? <span className="text-red-500 font-bold">Yes</span> : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="mt-2 text-sm text-muted">Mint Authority: <span className="font-mono">{shorten(report.mintAuthority)}</span></div>
              <div className="text-sm text-muted">Freeze Authority: <span className="font-mono">{shorten(report.freezeAuthority)}</span></div>
            </div>
          </Card>

          {/* Risks & Security Card */}
          <Card accent="accent4" icon={<FaUserShield />} className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-accent4 mb-2"><FaUserShield /> Risks & Security</div>
              {report.risks && report.risks.length > 0 ? (
                <ul className="space-y-2">
                  {report.risks.map((risk: any, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className={`font-bold ${getRiskColor(risk.level)}`}>{risk.level}</span>
                      <span className="font-semibold">{risk.name}:</span>
                      <span className="text-muted text-sm">{risk.description}</span>
                    </li>
                  ))}
                </ul>
              ) : <span className="text-green-500 font-bold">No major risks detected.</span>}
              <div className="mt-2 text-xs text-muted">Insider Networks: <span className="font-bold">{report.graphInsidersDetected}</span></div>
            </div>
          </Card>

          {/* Token Locking Card */}
          {report.lockers && Object.keys(report.lockers).length > 0 && (
            <Card accent="accent3" icon={<FaLock />} className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-accent3 mb-2"><FaLock /> Token Locking</div>
                <div className="mb-2 text-lg">Total USD Locked: <span className="font-bold">${getTotalLocked(report.lockers).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs text-left border border-border rounded-lg">
                    <thead>
                      <tr className="bg-background text-accent2">
                        <th className="px-2 py-1">Owner</th>
                        <th className="px-2 py-1">Unlock Date</th>
                        <th className="px-2 py-1">Amount Locked (USD)</th>
                        <th className="px-2 py-1">Program ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(report.lockers).map((l: any, idx: number) => (
                        <tr key={idx} className="border-t border-border">
                          <td className="px-2 py-1 font-mono">{shorten(l.owner)}</td>
                          <td className="px-2 py-1">{formatDate(l.unlockDate)}</td>
                          <td className="px-2 py-1">${l.usdcLocked?.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                          <td className="px-2 py-1 font-mono">{shorten(l.programID)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          )}

          {/* Creator Info Card */}
          <Card accent="accent2" icon={<FaKey />} className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xl font-semibold text-accent2 mb-2"><FaKey /> Creator Information</div>
              <div className="mb-2 text-sm">Creator Address: <span className="font-mono">{shorten(report.creator)}</span></div>
              {report.creatorTokens && report.creatorTokens.length > 0 && (
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full text-xs text-left border border-border rounded-lg">
                    <thead>
                      <tr className="bg-background text-accent2">
                        <th className="px-2 py-1">Token Mint</th>
                        <th className="px-2 py-1">Created At</th>
                        <th className="px-2 py-1">Market Cap</th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.creatorTokens.map((t: any, idx: number) => (
                        <tr key={idx} className="border-t border-border">
                          <td className="px-2 py-1 font-mono">{shorten(t.mint)}</td>
                          <td className="px-2 py-1">{formatDate(t.createdAt)}</td>
                          <td className="px-2 py-1">${t.marketCap?.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </Card>

          {/* Events Card */}
          {report.events && report.events.length > 0 && (
            <Card accent="accent4" icon={<FaHistory />} className="col-span-1 md:col-span-2 lg:col-span-2">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xl font-semibold text-accent4 mb-2"><FaHistory /> Events</div>
                <ul className="space-y-2">
                  {report.events.map((e: any, idx: number) => (
                    <li key={idx} className="border-l-4 border-accent2 pl-2">
                      <div className="text-xs text-muted">{formatDate(e.createdAt)}</div>
                      <div className="text-sm"><span className="font-semibold">Event:</span> {e.event} <span className="font-semibold">Old:</span> {e.oldValue} <span className="font-semibold">New:</span> {e.newValue}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default ErosInvestigator; 
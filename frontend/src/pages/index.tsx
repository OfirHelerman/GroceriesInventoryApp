import React, { useState } from 'react';
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

const Dashboard = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/stats');
      if (!res.ok) throw new Error('Failed to fetch stats');
      const data = await res.json();
      setStats(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Groceries Inventory Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded shadow p-4">
          <div className="text-gray-500">Total Items</div>
          <div className="text-2xl font-semibold">{stats ? stats.total_items : '--'}</div>
        </div>
        <div className="bg-white rounded shadow p-4">
          <div className="text-gray-500">Low Stock</div>
          <div className="text-2xl font-semibold">{stats ? stats.low_stock : '--'}</div>
        </div>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={fetchStats}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Stats'}
      </button>
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
};

export default function IndexPage() {
  return <Dashboard />;
}

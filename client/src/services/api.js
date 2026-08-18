const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const fetchPhones = async (params = {}) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      query.append(key, val);
    }
  });

  const res = await fetch(`${API_BASE}/phones?${query.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch smartphones');
  return res.json();
};

export const fetchPhoneById = async (id) => {
  const res = await fetch(`${API_BASE}/phones/${id}`);
  if (!res.ok) throw new Error('Smartphone not found');
  return res.json();
};

export const comparePhones = async (ids = []) => {
  if (ids.length === 0) return { success: false, phones: [], winners: {} };
  const res = await fetch(`${API_BASE}/compare?ids=${ids.join(',')}`);
  if (!res.ok) throw new Error('Failed to compare smartphones');
  return res.json();
};

export const getRecommendations = async (criteria) => {
  const res = await fetch(`${API_BASE}/recommend`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(criteria)
  });
  if (!res.ok) throw new Error('Failed to compute recommendations');
  return res.json();
};

export const fetchPriceTrackerDeals = async () => {
  const res = await fetch(`${API_BASE}/price-tracker`);
  if (!res.ok) throw new Error('Failed to fetch price tracker deals');
  return res.json();
};

export const submitPriceAlert = async (alertData) => {
  const res = await fetch(`${API_BASE}/price-alert`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(alertData)
  });
  if (!res.ok) throw new Error('Failed to register price drop alert');
  return res.json();
};

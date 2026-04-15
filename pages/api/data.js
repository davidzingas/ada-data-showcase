export default function handler(req, res) {
  res.status(200).json({
    metrics: [
      { month: 'January', revenue: 1200, users: 400 },
      { month: 'February', revenue: 1900, users: 600 },
      { month: 'March', revenue: 3000, users: 800 },
      { month: 'April', revenue: 2500, users: 700 },
      { month: 'May', revenue: 2800, users: 900 },
      { month: 'June', revenue: 3200, users: 1100 },
    ],
    summary: {
      totalRevenueYtd: 14600,
      totalUsersYtd: 4500,
      topRegion: 'North America',
      bestMonth: 'June',
    },
  })
}

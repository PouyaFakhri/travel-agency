import api from "src/config/api";

export const revalidate = 86400;

export default async function sitemap() {
  const baseUrl = "http://localhost:3000";
  let tours = [];
  try {
    const res = await api.get("/tour");
    tours = Array.isArray(res) ? res : [];
  } catch (error) {
    console.error("❌ Error fetching tours for sitemap:", error);
  }
  const tourUrls = tours
    .filter((tour) => tour?.id)
    .map((tour) => ({
      url: `${baseUrl}/tour/${tour.id}`,
      lastModified: new Date(
        tour.updatedAt || tour.createdAt || new Date()
      ).toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    }));

  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/buyguid`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/aboutus`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/refundguide`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/travelinsurance`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/whytorino`,
      lastModified: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
  ];

  return [...staticUrls, ...tourUrls];
}

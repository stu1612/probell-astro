// src/data/hubspot.ts
// HubSpot IDs for the three partner forms. They're public by design: the
// browser posts straight to HubSpot, so they ship in the page HTML anyway.
// Kept in code (not env vars) so a missing value can't silently drop leads.

export interface HubSpotForms {
  portalId: string;
  sales: string;
  retailer: string;
  distributor: string;
}

export const HUBSPOT_FORMS: HubSpotForms = {
  portalId: "148924644",
  sales: "f2569cec-521e-41db-957f-88b3793241c4",
  retailer: "d11252b6-8442-4caa-8b44-c1965d3fcee8",
  distributor: "7aaa6c4f-7540-43d6-b396-a50a06fa257a",
};

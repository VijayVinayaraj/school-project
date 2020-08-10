export interface RootObject {
    index_name: string;
    title: string;
    desc: string;
    org_type: string;
    org: string[];
    sector: string[];
    source: string;
    catalog_uuid: string;
    visualizable: string;
    active: string;
    created: number;
    updated: number;
    created_date: string;
    updated_date: string;
    target_bucket: Targetbucket;
    field: Field[];
    external_ws_url: string;
    external_ws: string;
    message: string;
    version: string;
    status: string;
    total: number;
    count: number;
    limit: string;
    offset: string;
    records: Data[];
  }
  
 export interface Data {
    id: string;
    country: string;
    state: string;
    city: string;
    station: string;
    last_update: string;
    pollutant_id: string;
    pollutant_min: string;
    pollutant_max: string;
    pollutant_avg: string;
    pollutant_unit: string;
  }
  
  interface Field {
    id: string;
    name: string;
    type: string;
  }
  
  interface Targetbucket {
    index: string;
    type: string;
    field: string;
  }
export interface Photo {
  id: string;
  title: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ApiResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

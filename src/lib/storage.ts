export type StorageObjectInput = {
  tenantId: string;
  residentId: string;
  fileName: string;
  documentType: string;
};

export function buildProtectedObjectKey(input: StorageObjectInput) {
  const normalizedName = input.fileName.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  return `${input.tenantId}/residents/${input.residentId}/documents/${input.documentType.toLowerCase()}/${Date.now()}-${normalizedName}`;
}

export const supportedDocumentTypes = [
  "Aadhaar",
  "Passport",
  "Driving Licence",
  "Agreement",
  "Address Proof",
  "Other"
] as const;

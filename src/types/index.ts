export type Role = "SUPER_ADMIN" | "PROPERTY_OWNER" | "STAFF";

export type RoomStatus = "Vacant" | "Partial" | "Occupied" | "Maintenance";

export type Room = {
  id: string;
  number: string;
  capacity: number;
  occupied: number;
  status: RoomStatus;
  rentAmount: number;
  notes: string;
};

export type Tenant = {
  id: string;
  fullName: string;
  mobileNumber: string;
  email?: string;
  address: string;
  emergencyContact: string;
  governmentIdType: string;
  governmentIdNumber: string;
  moveInDate: string;
  moveOutDate?: string;
  assignedRoom: string;
  monthlyRent: number;
  depositAmount: number;
  depositBalance: number;
  notes: string;
};

export type DocumentRecord = {
  id: string;
  tenantId: string;
  type: string;
  fileName: string;
  uploadedAt: string;
  size: string;
  storageDriver: "s3-ready";
};

export type Payment = {
  id: string;
  tenantId: string;
  tenantName: string;
  amount: number;
  paymentDate: string;
  paymentType: string;
  status: "Paid" | "Pending" | "Overdue";
  notes: string;
};

export type DepositActivity = {
  id: string;
  tenantName: string;
  type: "Received" | "Returned" | "Adjusted";
  amount: number;
  date: string;
  balance: number;
};

export type ActivityLog = {
  id: string;
  tenantId: string;
  label: string;
  description: string;
  date: string;
};

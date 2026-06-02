import type { ActivityLog, DepositActivity, DocumentRecord, Payment, Room, Tenant } from "@/types";

export const demoProperty = {
  tenantId: "tenant_shree_krishna_demo",
  ownerId: "owner_demo",
  name: "Shree Krishna Residency",
  city: "Ahmedabad",
  currency: "INR"
};

export const rooms: Room[] = [
  {
    id: "room_101",
    number: "101",
    capacity: 2,
    occupied: 2,
    status: "Occupied",
    rentAmount: 12000,
    notes: "Front-facing room with attached bathroom"
  },
  {
    id: "room_102",
    number: "102",
    capacity: 2,
    occupied: 1,
    status: "Partial",
    rentAmount: 11000,
    notes: "One bed available"
  },
  {
    id: "room_103",
    number: "103",
    capacity: 1,
    occupied: 0,
    status: "Vacant",
    rentAmount: 9000,
    notes: "Ready for move-in"
  }
];

export const tenants: Tenant[] = [
  {
    id: "tenant_aarav",
    fullName: "Aarav Mehta",
    mobileNumber: "+91 98765 43210",
    email: "aarav@example.com",
    address: "Navrangpura, Ahmedabad, Gujarat",
    emergencyContact: "+91 99887 77665",
    governmentIdType: "Aadhaar",
    governmentIdNumber: "XXXX-XXXX-1234",
    moveInDate: "2026-04-01",
    assignedRoom: "101",
    monthlyRent: 12000,
    depositAmount: 24000,
    depositBalance: 24000,
    notes: "Prefers digital rent receipts."
  },
  {
    id: "tenant_isha",
    fullName: "Isha Shah",
    mobileNumber: "+91 91234 56780",
    email: "isha@example.com",
    address: "Satellite, Ahmedabad, Gujarat",
    emergencyContact: "+91 90123 45678",
    governmentIdType: "Driving Licence",
    governmentIdNumber: "GJ01-2022-445566",
    moveInDate: "2026-05-05",
    assignedRoom: "101",
    monthlyRent: 12000,
    depositAmount: 24000,
    depositBalance: 24000,
    notes: "Agreement renewal due next quarter."
  },
  {
    id: "tenant_rohan",
    fullName: "Rohan Patel",
    mobileNumber: "+91 97654 32109",
    address: "Vastrapur, Ahmedabad, Gujarat",
    emergencyContact: "+91 96543 21098",
    governmentIdType: "Aadhaar",
    governmentIdNumber: "XXXX-XXXX-8899",
    moveInDate: "2026-05-15",
    assignedRoom: "102",
    monthlyRent: 11000,
    depositAmount: 22000,
    depositBalance: 22000,
    notes: "Pending address proof upload."
  }
];

export const documents: DocumentRecord[] = [
  {
    id: "doc_1",
    tenantId: "tenant_aarav",
    type: "Aadhaar",
    fileName: "aarav-aadhaar.pdf",
    uploadedAt: "2026-04-01",
    size: "480 KB",
    storageDriver: "s3-ready"
  },
  {
    id: "doc_2",
    tenantId: "tenant_aarav",
    type: "Agreement",
    fileName: "aarav-rental-agreement.pdf",
    uploadedAt: "2026-04-02",
    size: "1.2 MB",
    storageDriver: "s3-ready"
  },
  {
    id: "doc_3",
    tenantId: "tenant_isha",
    type: "Driving Licence",
    fileName: "isha-licence.jpg",
    uploadedAt: "2026-05-05",
    size: "820 KB",
    storageDriver: "s3-ready"
  }
];

export const payments: Payment[] = [
  {
    id: "pay_1",
    tenantId: "tenant_aarav",
    tenantName: "Aarav Mehta",
    amount: 12000,
    paymentDate: "2026-06-01",
    paymentType: "UPI",
    status: "Paid",
    notes: "June rent received manually"
  },
  {
    id: "pay_2",
    tenantId: "tenant_isha",
    tenantName: "Isha Shah",
    amount: 12000,
    paymentDate: "2026-06-02",
    paymentType: "Cash",
    status: "Paid",
    notes: "Receipt issued"
  },
  {
    id: "pay_3",
    tenantId: "tenant_rohan",
    tenantName: "Rohan Patel",
    amount: 11000,
    paymentDate: "2026-06-05",
    paymentType: "UPI",
    status: "Pending",
    notes: "Follow up scheduled"
  }
];

export const deposits: DepositActivity[] = [
  { id: "dep_1", tenantName: "Aarav Mehta", type: "Received", amount: 24000, date: "2026-04-01", balance: 24000 },
  { id: "dep_2", tenantName: "Isha Shah", type: "Received", amount: 24000, date: "2026-05-05", balance: 24000 },
  { id: "dep_3", tenantName: "Rohan Patel", type: "Received", amount: 22000, date: "2026-05-15", balance: 22000 }
];

export const activityLogs: ActivityLog[] = [
  {
    id: "log_1",
    tenantId: "tenant_aarav",
    label: "Moved In",
    description: "Assigned to Room 101",
    date: "2026-04-01"
  },
  {
    id: "log_2",
    tenantId: "tenant_aarav",
    label: "Deposit Received",
    description: "Security deposit recorded",
    date: "2026-04-01"
  },
  {
    id: "log_3",
    tenantId: "tenant_aarav",
    label: "Rent Paid",
    description: "June rent marked as paid",
    date: "2026-06-01"
  },
  {
    id: "log_4",
    tenantId: "tenant_rohan",
    label: "Document Pending",
    description: "Address proof still required",
    date: "2026-05-20"
  }
];

export const dashboardMetrics = {
  totalRooms: rooms.length,
  occupiedRooms: rooms.filter((room) => room.status === "Occupied").length,
  vacantRooms: rooms.filter((room) => room.status === "Vacant").length,
  monthlyRentCollection: payments.filter((payment) => payment.status === "Paid").reduce((sum, payment) => sum + payment.amount, 0),
  pendingRent: payments.filter((payment) => payment.status !== "Paid").reduce((sum, payment) => sum + payment.amount, 0),
  totalTenants: tenants.length
};

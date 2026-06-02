import { notFound } from "next/navigation";
import { Download, FileUp, RefreshCw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeading } from "@/components/app/page-heading";
import { activityLogs, documents, tenants } from "@/lib/demo-data";
import { supportedDocumentTypes } from "@/lib/storage";
import { formatCurrency, formatDate } from "@/lib/utils";

type TenantProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TenantProfilePage({ params }: TenantProfilePageProps) {
  const { id } = await params;
  const tenant = tenants.find((item) => item.id === id);

  if (!tenant) {
    notFound();
  }

  const tenantDocuments = documents.filter((document) => document.tenantId === tenant.id);
  const tenantLogs = activityLogs.filter((log) => log.tenantId === tenant.id);

  return (
    <>
      <PageHeading title={tenant.fullName} description="Professional tenant profile with stay details, identity, documents, deposit, and ledger." />

      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <Card>
            <CardHeader>
              <h3 className="font-semibold">Personal Details</h3>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <InfoRow label="Mobile" value={tenant.mobileNumber} />
              <InfoRow label="Email" value={tenant.email ?? "Not provided"} />
              <InfoRow label="Address" value={tenant.address} />
              <InfoRow label="Emergency Contact" value={tenant.emergencyContact} />
              <InfoRow label="Government ID" value={`${tenant.governmentIdType} - ${tenant.governmentIdNumber}`} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-semibold">Stay Details</h3>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm">
              <InfoRow label="Assigned Room" value={tenant.assignedRoom} />
              <InfoRow label="Move-in Date" value={formatDate(tenant.moveInDate)} />
              <InfoRow label="Move-out Date" value={tenant.moveOutDate ? formatDate(tenant.moveOutDate) : "Active stay"} />
              <InfoRow label="Monthly Rent" value={formatCurrency(tenant.monthlyRent)} />
              <InfoRow label="Deposit Amount" value={formatCurrency(tenant.depositAmount)} />
              <InfoRow label="Notes" value={tenant.notes} />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold">Document Vault</h3>
                <p className="mt-1 text-sm text-neutral-500">Protected metadata with cloud-ready object storage keys.</p>
              </div>
              <Button>
                <FileUp className="h-4 w-4" />
                Upload
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex flex-wrap gap-2">
                {supportedDocumentTypes.map((type) => (
                  <span key={type} className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
                    {type}
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {tenantDocuments.map((document) => (
                  <div key={document.id} className="rounded-md border border-neutral-200 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{document.type}</p>
                        <p className="mt-1 text-sm text-neutral-500">{document.fileName}</p>
                        <p className="mt-1 text-xs text-neutral-500">
                          {formatDate(document.uploadedAt)} - {document.size}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" className="h-9 w-9 px-0" aria-label="Download document">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" className="h-9 w-9 px-0" aria-label="Replace document">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" className="h-9 w-9 px-0" aria-label="Delete document">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                {tenantDocuments.length === 0 && <p className="rounded-md bg-neutral-50 p-4 text-sm text-neutral-600">No documents uploaded yet.</p>}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-semibold">Ledger Timeline</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {tenantLogs.map((log) => (
                <div key={log.id} className="border-l border-neutral-200 pl-4">
                  <p className="text-sm font-semibold">{log.label}</p>
                  <p className="mt-1 text-sm text-neutral-600">{log.description}</p>
                  <p className="mt-1 text-xs text-neutral-500">{formatDate(log.date)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-neutral-100 pb-3 last:border-0 last:pb-0">
      <span className="text-neutral-500">{label}</span>
      <span className="max-w-52 text-right font-medium text-neutral-900">{value}</span>
    </div>
  );
}

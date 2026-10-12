import { notFound } from 'next/navigation';

// Investments page unpublished and removed from public scope — returns 404
export default function InvestmentsPage() {
  notFound();
}

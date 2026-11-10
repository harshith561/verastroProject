import { redirect } from 'next/navigation';

// Intentional redirect: /engineering redirected to /services
export default function EngineeringPage() {
  redirect('/services');
}

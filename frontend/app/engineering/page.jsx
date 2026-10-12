import { redirect } from 'next/navigation';

// Intentional redirect: /engineering replaced by /service-coordination
export default function EngineeringPage() {
  redirect('/service-coordination');
}

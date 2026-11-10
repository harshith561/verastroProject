import { redirect } from 'next/navigation';

// Intentional permanent redirect: /service-coordination consolidated into /services
export default function ServiceCoordinationPage() {
  redirect('/services');
}

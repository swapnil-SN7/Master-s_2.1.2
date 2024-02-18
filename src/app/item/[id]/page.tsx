export default function Item({ params }: { params: { id: string } }) {
  return <div>item {params.id}</div>;
}

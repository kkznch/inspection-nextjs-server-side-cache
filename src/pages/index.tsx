export async function getServerSideProps(ctx: any) {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=59'
  );

  return {
    props: { dateTime: Date().toString() },
  };
}

export default function Home(props) {
  return (
    <>
      <h1>テストなり</h1>
      <p>date: {props.dateTime}</p>
    </>
  );
}

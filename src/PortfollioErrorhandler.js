export default function PortfollioErrorHandler({ error }) {
  return (
    <>
      <p className="port-con-err-handler">{error.message}</p>
    </>
  );
}

import ClientOnlyPortal from "./ClientOnlyPortal";

export default function Modal({ open, children }) {
  return (
    <div>
      {open && (
        <ClientOnlyPortal selector="#modal">{children}</ClientOnlyPortal>
      )}
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">

      <div className="not-found-content">

        <span className="section-tag">
          GRUPO MEINSAL
        </span>

        <div className="not-found-number">
          404
        </div>

        <h1>
          Página no encontrada.
        </h1>

        <p>
          El servicio o proyecto que estás buscando
          no existe o ya no está disponible.
        </p>

        <Link
          href="/"
          className="primary-button"
        >
          Volver al inicio
          <span>→</span>
        </Link>

      </div>

    </main>
  );
}
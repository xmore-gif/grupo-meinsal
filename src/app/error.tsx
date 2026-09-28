"use client";

import Link from "next/link";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  reset,
}: ErrorPageProps) {
  return (
    <main className="error-page">

      <div className="error-card">

        <span className="section-tag">
          GRUPO MEINSAL
        </span>

        <div className="error-number">
          !
        </div>

        <h1>
          Algo salió mal.
        </h1>

        <p>
          No pudimos cargar la información solicitada.
          Puedes intentar nuevamente o regresar al inicio.
        </p>

        <div className="error-actions">

          <button
            type="button"
            onClick={() => reset()}
            className="primary-button"
          >
            Intentar nuevamente
            <span>↻</span>
          </button>

          <Link
            href="/"
            className="secondary-button"
          >
            Volver al inicio
          </Link>

        </div>

      </div>

    </main>
  );
}
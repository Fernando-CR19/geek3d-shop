import { Suspense } from "react";
import CatalogoContent from "./CatalogoContent";

export default function CatalogPage() {
  return (
    <Suspense fallback={null}>
      <CatalogoContent />
    </Suspense>
  );
}

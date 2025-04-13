import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";

export default function CreateNiche() {
  return (
    <div>
      <PageMeta
        title="xScalify create niche"
        description="xScalify create niche page"
      />
      <PageBreadcrumb pageTitle="Create niche" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Create Persona
          </h3>

          <p className="mb-8 text-base font-normal text-gray-600 dark:text-white/60 sm:text-lg">
            Create your persona and get started with your niche.
          </p>
        </div>
      </div>
    </div>
  );
}

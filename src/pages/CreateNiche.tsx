import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import Button from "../components/ui/button/Button";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import { useAuth } from "../context/AuthContext";

export default function CreateNiche() {
  const { user } = useAuth();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const niche = formData.get("niche") as string;
    const res = await fetch("https://social.xscallify.com/customer-persona/", {
      method: "POST",
      body: JSON.stringify({ niche, email: user?.email }),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${user?.access_token}`,
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Niche creation failed");
    }
    console.log("Niche created successfully:", data);
  };
  return (
    <div>
      <PageMeta
        title="xScalify create niche"
        description="xScalify create niche page"
      />
      <PageBreadcrumb pageTitle="Create niche" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <div>
            <div className="mb-5 sm:mb-8">
              <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
                Create Persona
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Create your persona and get started with your niche.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <Label>
                      Enter you niche <span className="text-error-500">*</span>{" "}
                    </Label>
                    <Input
                      placeholder="i help ___ to achieve __ without(false belief of your customer) ___"
                      name="niche"
                    />
                  </div>
                  <div>
                    <Button className="w-full" size="sm">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

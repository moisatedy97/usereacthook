import BreadcrumbMenu from "@/components/breadcrumb-menu";
import ContactElements from "./_components/contact-elements";

export default async function Contact() {
  return (
    <div className="mt-5">
      <BreadcrumbMenu pageName={"Contact"} />
      <div className="py-3">
        <h2 className="mb-2 text-2xl font-semibold lg:text-4xl">Contact</h2>
        <p className="text-muted-foreground">For every problem you can contact us!</p>
      </div>
      <ContactElements />
    </div>
  );
}

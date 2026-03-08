import FormValidation from "./components/FormValidation";

export default function Home() {
  return (

      <main className="flex min-h-screen w-full flex-col sm:px-6 py-12 lg:px-8 lg:items-center sm:items-start">
        <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-primary/5 to-transparent -z-10" />
        <div className="w-full max-w-4xl text-center mb-12 space-y-5 ">
          <div className="inline-flex bg-blue-100 gap-2 px-3 py-1 rounded-full  border  text-xs font-bold tracking-widest uppercase">
              <p>
                String WebHook sort
              </p>
          </div>
          <p className="text-3xl font-bold tracking-widest sm:text-4xl ">
            API testing <span className="text-sky-900">Hub</span>
          </p>
          <p className="text-muted-foreground text-sm leading-8 text-gray-600 px-10 sm:px-0 sm:text-lg">
            The go to tool for validating and sorting your strings.
          </p>
        </div>
        <FormValidation />
      </main>
  );
}

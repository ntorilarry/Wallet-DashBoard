import { LockClosedIcon } from "@heroicons/react/solid";
import "../styles/forgetPassword.css"

function ForgetPassword() {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" +
            ")",
        }}
      >
        <div className=" bg-white max-w-md w-full space-y-8 p-10 border rounded-xl glass">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Forgot your password
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Enter your email address
              </a>
            </p>
          </div>

          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;

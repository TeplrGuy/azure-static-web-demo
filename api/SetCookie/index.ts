import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: 'Hello, world.',
    cookies: [
      {
        name: 'HOST',
        value: 'value1',
        secure: true
      },
       {
        name: '__Secure',
        value: 'value2',
        domain: 'new-domain.com'
      }
    ]
  }
}

export default httpTrigger

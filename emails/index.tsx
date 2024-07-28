import { Tailwind } from "@react-email/components";

export default function Email({ code }: {code: string}) {
  return (
    <Tailwind>
      <center className="font-sans justify-center items-center">
        <h1>Authentication Code</h1>
        <p className="font-semibold text-lg text-center">
          {'Hello from your local '}
          <strong>
            <a href="https://portal.elsombrero.pro" className="text-sky-600 no-underline">
              Web Portal
            </a>
          </strong>.
          <br />
          {"It's seems like you try to connect to your personnal space."}
          <br />
          {"Your authentication code is"}
          <p className="text-4xl p-4 bg-zinc-200 rounded-lg w-fit justify-center" style={{letterSpacing: '10px'}}>
            {code}
          </p>
        </p>
      </center>
    </Tailwind>
  )
}

Email.PreviewProps = {code: '1234'}
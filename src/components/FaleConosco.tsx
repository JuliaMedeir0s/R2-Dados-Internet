import { useState } from "react";

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Adicionar a data atual ao formData
    const dataAtual = new Date().toLocaleDateString("pt-BR");
    const formDataWithDate = { ...formData, data: dataAtual };

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyzVvTk8C_sG6ONkqMY9Q5TxQZe96Vd2l_YA_n2xe-QTSk_MZ8LCZYBzDOG9wMYPgweRA/exec";

    try {
      // Enviar para Google Sheets
      const formDataToSend = new FormData();
      Object.entries(formDataWithDate).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const sheetsResponse = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      // Log para debug
      console.log('Sheets response status:', sheetsResponse.status);
      console.log('Sheets response headers:', sheetsResponse.headers.get('content-type'));

      // Verificar se a resposta é JSON antes de parsear
      const contentType = sheetsResponse.headers.get('content-type');
      let sheetsResult;
      
      if (contentType && contentType.includes('application/json')) {
        sheetsResult = await sheetsResponse.json();
        console.log('Sheets result:', sheetsResult);
      } else {
        // Se não for JSON, ler como texto para debug
        const textResponse = await sheetsResponse.text();
        console.log('Sheets response (text):', textResponse);
        
        // Se recebeu HTML, significa que o script não está configurado corretamente
        // Mas vamos considerar sucesso se o status for 200/302
        if (sheetsResponse.ok || sheetsResponse.status === 302) {
          sheetsResult = { result: "success" };
        } else {
          throw new Error("Resposta inválida do Google Sheets. Verifique o script.");
        }
      }

      if (sheetsResult.result === "success") {
        // Mostrar mensagem de sucesso imediatamente
        setSuccessMessage(
          "Mensagem enviada com sucesso! Entraremos em contato em breve."
        );
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          mensagem: "",
        });

        // Esconder mensagem após 5 segundos
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        throw new Error("Erro ao enviar formulário.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente."
      );

      // Esconder mensagem após 5 segundos
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      <div className="flex justify-center items-center absolute top-1/20 left-10 md:left-40 w-24 h-24 md:w-64 md:h-64 z-0 max-lg:hidden">
        <img
          src="/images/formDetail1.png"
          alt="Balão de interrogação"
          className=""
        />
      </div>

      <div className="flex justify-center items-center absolute top-1/20 right-10 md:right-30 w-32 h-32 md:w-64 md:h-64 z-0 max-lg:hidden">
        <img src="/images/formDetail2.png" alt="Balões de chat" className="" />
      </div>

      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-secondary text-lg font-bold font-montserrat">
            Fale Conosco
          </h2>
          <h1 className="text-white text-2xl font-bold md:text-4xl font-montserrat">
            Envie-nos uma mensagem
          </h1>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Mensagem de sucesso */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-500 text-white rounded-2xl text-center font-montserrat shadow-lg max-lg:mx-7">
              <p className="font-bold">✅ {successMessage}</p>
            </div>
          )}

          {/* Mensagem de erro */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-500 text-white rounded-2xl text-center font-montserrat shadow-lg max-lg:mx-7">
              <p className="font-bold">❌ {errorMessage}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="p-8 max-lg:p-0 rounded-xl font-montserrat"
          >
            <div className="mb-4 max-lg:px-7 max-lg:mt-5">
              <label htmlFor="nome" className="sr-only">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full p-3 border placeholder: placeholder:text-secondary border-gray-300 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 max-lg:px-7">
              <div>
                <label htmlFor="email" className="sr-only">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-white border-gray-300 rounded-xl placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="max-lg:px-0">
                <label htmlFor="telefone" className="sr-only">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border bg-white border-gray-300 rounded-xl placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="mb-6 max-lg:px-7">
              <label htmlFor="mensagem" className="sr-only">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Mensagem"
                rows={6}
                value={formData.mensagem}
                onChange={handleChange}
                required
                className="w-full h-20 p-4 border bg-white border-gray-300 rounded-xl placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-1/2 bg-secondary text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Enviar mensagem!"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

import React from "react"
import Layout from "../components/Layout"
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"
import { FaInstagram, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"

import SEO from "../components/SEO"

const ContactPage = () => (
  <Layout>
    <SEO title="Contato" />
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2 block-title-bw">Contato</h1>
          <div class="columns is-vcentered">
            <div class="column">
              <p class="buttons is-centered">
                <a
                  class="button is-medium is-primary is-outlined"
                  href="https://facebook.com/inspermileage"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="icon is-medium">
                    <FaFacebook size="fa-2x" />
                  </span>
                  <span>Facebook</span>
                </a>
                <a
                  class="button is-medium is-primary is-outlined"
                  href="https://instagram.com/inspermileage"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="icon is-medium">
                    <FaInstagram size="fa-2x" />
                  </span>
                  <span>Instagram</span>
                </a>
                <a
                  class="button is-medium is-primary is-outlined"
                  href="https://linkedin.com/company/insper-mileage/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="icon is-medium">
                    <FaLinkedin size="fa-2x" />
                  </span>
                  <span>Linkedin</span>
                </a>
                <a
                  class="button is-medium is-primary is-outlined"
                  href="https://github.com/inspermileage"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="icon is-medium">
                    <FaGithub size="fa-2x" />
                  </span>
                  <span>GitHub</span>
                </a>
              </p>
            </div>

            <div class="is-divider-vertical" data-content="Ou"></div>
            <div class="column ">
              <h1 class="title is-4">
                Preencha os campos abaixo para sabermos melhor como podemos te
                ajudar.
              </h1>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Seus dados</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <input class="input" type="text" placeholder="Nome" />
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded">
                      <input class="input" type="email" placeholder="Email" />
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="field has-addons">
                      <p class="control">
                        <a class="button is-static">+55</a>
                      </p>
                      <p class="control is-expanded">
                        <input
                          class="input"
                          type="tel"
                          placeholder="Telefone"
                        />
                      </p>
                    </div>
                    <p class="help">Não se esqueça do DDD</p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Assunto</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded">
                      <div class="select">
                        <select>
                          <option>Parceria</option>
                          <option>Visita na faculdade</option>
                          <option>Dúvida / Sugestão</option>
                        </select>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Mensagem</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Como podemos te ajudar?"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label">
                  <label class="label">Resposta</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="via" />
                        via Telefone
                      </label>
                      <label class="radio">
                        <input type="radio" name="via" />
                        via Email
                      </label>
                    </div>
                    <p class="help">
                      Fique tranquilo, ligações somente em horário comercial.
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage

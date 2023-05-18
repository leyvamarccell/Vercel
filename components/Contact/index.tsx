'use client'

import Coin from "../Coin";
import Features from "../Features";
import NewsLatterBox from "../Soporte/NewsLatterBox";
import { useState } from "react";
import Modal from '../Modal'
import {useCounterStore} from '../store/counterStore'
import { names } from "../Coin";

const Contact = () => {

  const [pay, setPay] = useState('')
  const value = useCounterStore((state) => state.value)
  const [card, setCard] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')


  return (
    
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Enviar remesa
              </h2>
         
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                   
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder="Télefono de contacto"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                     
                      <input
                           onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email de contacto"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>



                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                  
                      <select className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">
                        <option value='MLC'>Transferencia MLC</option>
                        <option value='CUP'>Transferencia CUP</option>
                      </select>
                    </div>

                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                     
                      <input
                       onChange={(e) => setCard(e.target.value)}
                        type="email"
                        placeholder="Targeta del beneficiario"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                     
                      <input
                        onChange={(e) => setPay(e.target.value)}
                        type="number"
                        placeholder="Monto en USD"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>


                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                     
                      <div   className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">Reciben: {Number(pay) - Number(pay) * 0.05}</div>
                     
                    </div>
                  </div>





                <div className="w-full px-4">
                  <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark dark:text-white"
                      >
                        Método de pago : {names}
                      </label>
                    <div className="mb-8">
                   
                    <div className="grid grid-cols-3 mt-8 ml-4 md:grid-cols-6 md:ml-10 ">
                      <Coin name='Zelle' text='' image='https://qvapay.com/img/coins/zelle.svg'/>
                      <Coin name='Bitcoin' text='bc1qtfgly3f5mwt3qx23zekln2eln4g980sh8da5sv' image='https://www.svgrepo.com/show/428655/bitcoin-btc-cryptocurrency.svg'/>
                      <Coin name='Ethereum' text='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://www.svgrepo.com/show/428658/ethereum-crypto-cryptocurrency-2.svg'/>
                      <Coin name='USDT' text='TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd' image='https://www.svgrepo.com/show/428653/tether-crypto-cryptocurrency-2.svg'/>
                      <Coin name='Tron' text='TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd' image='https://www.svgrepo.com/show/428648/tron-crypto-cryptocurrency.svg'/>
                      <Coin name='USDC' text='TWHy5vrgY4WDP5sdAE1kH7UfYygrhpFkKd' image='https://www.svgrepo.com/show/428649/usdc-usd-coin.svg'/>
                      <Coin name='Litecoin' text='ltc1qhkthlnurv6ce8n4uq7qk0pcjyah6f0uerg8acv' image='https://www.svgrepo.com/show/428651/litecoin-ltc-cryptocurrency.svg'/>
                      <Coin name='Dash' text='XasxQKSbSZBfDAXRrRYZLrzXfp9MrtwGNn' image='https://www.svgrepo.com/show/428660/dash-cryptocurrency-coin.svg'/>
                      <Coin name='XRP' text='rLshcZJQ6ogQJBNcnEUvsNTyDaLoA4Zq4p' image='https://www.svgrepo.com/show/428647/ripple-xrp-cryptocurrency-3.svg'/>
                      <Coin name='Solana' text='EWBm3f1RWTrN68kogjuVcTHJcbWedjUHKq2NDgjZD1Qs' image='https://qvapay.com/img/coins/sol.svg'/>
                      <Coin name='Cardano' text='addr1q9kqkz9lm8fd53z4sgtrxjkuj4050gg4078y36hgep4n8r6dugfe0f6hh54ep864z0y023el8mxc5875v2re9jtaaukq37s2la' image='https://qvapay.com/img/coins/ada.svg'/>
                      <Coin name='BNB' text='0x0148B7cE77aD688894aeCa413FD6B6378E7b032a' image='https://qvapay.com/img/coins/bnb.svg'/>
                     
                    </div>
                    </div>
                   
                  </div>
                  <div className="w-full px-4">
                   
                   <Modal phone={phone} email={email} pay={pay} card={card}/>
                  </div>
                </div>
             



            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';
import { Typography } from '@material-tailwind/react';
import React from 'react';
import { Footer } from '@/widgets/layout';

function TourDetails() {

  return (
    <>
        <div className="relative flex h-24 content-center items-center justify-center pt-16 pb-20">
            <div className="absolute top-0 h-24 w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
            <div className="absolute top-0 h-24 w-full bg-black/60 bg-cover bg-center" />
        </div>

        <div className="container mx-auto p-4">
            {/* Container flex para alinhar o conteúdo principal e o card de reserva */}
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
                
                {/* Seção principal com título, descrição e itinerário */}
                <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                        <img src="/public/img/favicon.png" className="h-12" alt="Ícone de Jericoacoara"/>
                        <Typography variant="h3" color="black" className="font-black">
                            Jericoacoara - Jijoca
                        </Typography>
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="grid grid-cols-2 gap-4 max-w-4x1">
                            <div className="col-span-1">
                                <img src="/public/img/detalhesjeri.png" alt="Imagem maior" className="w-full h-[500px] object-cover rounded-lg shadow-lg" />
                            </div>

                            <div className="grid grid-rows-2 gap-4">
                                <img src="/public/img/detalhesjeri2.png" alt="Imagem menor 1" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
                                <img src="/public/img/detalhesjeri3.png" alt="Imagem menor 2" className="w-full h-[234px] object-cover rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                    
                    <Typography variant="h4" color="black" className="font-black mb-2">
                        Passeio imperdível: Praias de Jericoacoara 
                    </Typography>
                    <Typography variant="lead" color="black" className="font-black opacity-80 mb-4">
                        3 dias e 2 noites
                    </Typography>
                    <Typography className="font-normal text-blue-gray-800 mb-8">
                        Prepare-se para viver momentos inesquecíveis nas praias paradisíacas de Jericoacoara. Este pacote de 3 dias e 2 noites foi criado especialmente para você aproveitar o melhor que esse destino único tem a oferecer, incluindo passeios a lagoas de águas cristalinas, dunas espetaculares, o pôr do sol incrível na Duna do Pôr do Sol e as belezas naturais da Pedra Furada. Um paraíso rústico onde a natureza e a tranquilidade se encontram para oferecer uma experiência inesquecível!
                        <br /><br />
                        <strong>Itinerário</strong><br/>
                        <strong>Dia 1:</strong> Chegada em Jericoacoara e Pôr do Sol na Duna<br/>
                        Saída de Fortaleza em veículo 4x4, passando por belíssimos cenários até chegar a Jericoacoara. Check-in na pousada e tarde livre para explorar a vila.<br/>
                        <strong>Dia 2:</strong> Passeio pelas Lagoas e Árvore da Preguiça<br/>
                        Lagoa do Paraíso, Lagoa Azul, e uma parada na Árvore da Preguiça.<br/>
                        <strong>Dia 3:</strong> Pedra Furada e Despedida<br/>
                        Caminhada até a Pedra Furada, tempo livre e almoço de despedida.
                        <br/><br/>
                        <strong>O que está incluso</strong><br/>
                        Transporte, hospedagem, passeios guiados, e suporte completo.
                        <br/><br/>
                        <strong>Dicas para o Passeio</strong><br/>
                        Traga protetor solar, roupas leves e dinheiro em espécie.
                    </Typography>
                </div>

                {/* Card de Preço e Reserva */}
                <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-xl p-6 border border-gray-200">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                        R$500 <span className="text-lg font-normal">por pessoa</span>
                    </div>

                    <div className="flex items-center text-orange-400 mb-4">
                        <StarIcon className="w-5 h-5"/>
                        <StarIcon className="w-5 h-5"/>
                        <StarIcon className="w-5 h-5"/>
                        <StarIcon className="w-5 h-5"/>
                        <StarOutlineIcon className="w-5 h-5" />
                        <span className="text-gray-600 text-sm ml-2">(4.0)</span>
                    </div>

                    <div className="border border-gray-300 rounded-lg p-2 mb-4">
                        <label className="block text-gray-600 text-xs mb-1">DATA</label>
                        <input type="date" className="w-full border-none text-gray-800 text-sm" />
                    </div>

                    <button className="w-full bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg mb-4 text-center flex items-center justify-center">
                        Reservar
                    </button>
                    <p className="text-center text-sm text-gray-500 mb-2">Você será redirecionado</p>
                    <Typography variant="h6" className="mt-4"> Confira as avaliações de clientes:</Typography>

                    <div className="mt-6 space-y-4">
                        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                            <div className="flex items-center text-orange-400 mb-2">
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarOutlineIcon className="w-5 h-5" />
                            </div>
                            <p className="text-gray-700 text-sm">"Experiência incrível! As praias são maravilhosas e o guia foi muito atencioso."</p>
                            <p className="text-gray-500 text-xs mt-1">- João Silva</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                            <div className="flex items-center mb-2 text-orange-400">
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            </div>
                            <p className="text-gray-700 text-sm">"Lugar espetacular, com muitas belezas naturais. Recomendo a todos!"</p>
                            <p className="text-gray-500 text-xs mt-1">- Maria Oliveira</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                            <div className="flex items-center mb-2 text-orange-400">
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarOutlineIcon className="w-5 h-5" />
                            </div>
                            <p className="text-gray-700 text-sm">"Foi uma viagem memorável, a organização estava excelente."</p>
                            <p className="text-gray-500 text-xs mt-1">- Carlos Mendes</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                            <div className="flex items-center mb-2 text-orange-400">
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarOutlineIcon className="w-5 h-5" />
                            <StarOutlineIcon className="w-5 h-5" />
                            </div>
                            <p className="text-gray-700 text-sm">"O lugar é bonito, mas a infraestrutura poderia ser melhor. Vale a pena pela paisagem."</p>
                            <p className="text-gray-500 text-xs mt-1">- Ana Pereira</p>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
                            <div className="flex items-center mb-2 text-orange-400">
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarIcon className="w-5 h-5"/>
                            <StarOutlineIcon className="w-5 h-5" />
                            </div>
                            <p className="text-gray-700 text-sm">"A viagem foi excelente e o guia muito atencioso! Só acho que o tempo em cada parada poderia ser um pouco maior."</p>
                            <p className="text-gray-500 text-xs mt-1">- Lucas Almeida</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 mb-8">
                <Typography variant="h5" className="font-black text-center mb-4">Você estará aqui</Typography>
                <div className="w-full h-400px rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.83673063378!2d-40.52208008070746!3d-2.7964836491431816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x771850f49bb2ff5%3A0x4cda3458b7114e12!2sJericoacoara%2C%20Jijoca%20de%20Jericoacoara%20-%20CE%2C%2062558-000!5e0!3m2!1sen!2sbr!4v1634654602856!5m2!1sen!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de Jericoacoara"></iframe>
                </div>
            </div>
        </div>


        <div className="bg-white">
            <Footer />
        </div>
    </>
  );
}

export default TourDetails;

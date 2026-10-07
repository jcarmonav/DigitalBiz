import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, Send, AlertCircle } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactSectionProps {
  onMessageSent?: (msg: ContactMessage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onMessageSent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Infraestructura & Nube',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, ingresa tu nombre completo.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Por favor, ingresa un correo corporativo válido.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, ingresa tu mensaje o consulta.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '226859a7-fe71-4791-bd67-5e41c5709a34',
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          service: formData.service,
          subject: `Nueva consulta DigitalBiz: ${formData.service} - ${formData.name.trim()}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        if (onMessageSent) {
          onMessageSent({
            fullName: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            timestamp: Date.now()
          });
        }
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Hubo un error al procesar el envío. Por favor, intenta nuevamente.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error de red al enviar el formulario. Por favor, revisa tu conexión e inténtalo de nuevo.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      service: 'Infraestructura & Nube',
      message: ''
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="w-full px-6 py-20 max-w-[1280px] mx-auto">
      <div className="bg-[#000000] text-white rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-gray-800">
        {/* Left Info Panel */}
        <div className="p-8 sm:p-12 lg:w-2/5 flex flex-col justify-between relative overflow-hidden bg-[#001f25]">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0051d5]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-[28px] sm:text-[34px] font-bold text-white mb-4 leading-tight tracking-tight">
              ¿Listo para optimizar tu infraestructura tecnológica?
            </h2>
            <p className="text-[15px] text-[#a1efff]/80 mb-10 leading-relaxed font-normal">
              Ponte en contacto con nuestros especialistas para diseñar un blueprint tecnológico a la medida de tu empresa.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              <a
                href="tel:+56934500790"
                className="flex items-center gap-4 group hover:translate-x-1 transition-transform"
              >
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0051d5] transition-colors">
                  <Phone size={20} className="text-[#a1efff] group-hover:text-white" />
                </div>
                <span className="text-[16px] text-gray-100 font-medium">+56934500790</span>
              </a>

              <a
                href="mailto:digitalbizcl@gmail.com"
                className="flex items-center gap-4 group hover:translate-x-1 transition-transform"
              >
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#0051d5] transition-colors">
                  <Mail size={20} className="text-[#a1efff] group-hover:text-white" />
                </div>
                <span className="text-[16px] text-gray-100 font-medium">digitalbizcl@gmail.com</span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[#a1efff]" />
                </div>
                <span className="text-[16px] text-gray-100 font-medium">Torre Tecnológica, Piso 12</span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-xs text-[#a1efff]/60">
            Respuesta promedio garantizada en menos de 2 horas hábiles.
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="p-8 sm:p-12 lg:w-3/5 bg-white text-[#191c1e]">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-[22px] font-bold text-[#000000] mb-2">
                ¡Mensaje recibido con éxito!
              </h3>
              <p className="text-[#475569] text-[15px] max-w-md mb-8">
                Gracias, <span className="font-semibold text-gray-900">{formData.name}</span>. Un especialista en <span className="font-semibold text-gray-900">{formData.service}</span> se pondrá en contacto al correo <span className="font-semibold text-gray-900">{formData.email}</span> a la brevedad.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#000000] text-white px-8 py-3.5 rounded font-semibold text-sm hover:bg-[#1f2937] transition-all"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3 text-red-700 text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* 2-Column Names & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#334155]">
                    Nombre Completo
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#f7f9fb] border border-[#c6c6cd] rounded px-4 py-3 text-[15px] text-[#191c1e] placeholder-gray-400 focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-colors"
                    placeholder="Ej. Juan Pérez"
                    type="text"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-[#334155]">
                    Email Corporativo
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#f7f9fb] border border-[#c6c6cd] rounded px-4 py-3 text-[15px] text-[#191c1e] placeholder-gray-400 focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-colors"
                    placeholder="juan@empresa.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-[#334155]">
                  Servicio de Interés
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#f7f9fb] border border-[#c6c6cd] rounded px-4 py-3 text-[15px] text-[#191c1e] focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-colors"
                  >
                    <option value="Infraestructura & Nube">Infraestructura &amp; Nube</option>
                    <option value="Soporte Técnico 24/7">Soporte Técnico 24/7</option>
                    <option value="Ciberseguridad Empresarial">Ciberseguridad Empresarial</option>
                    <option value="Desarrollo Web & Software">Desarrollo Web &amp; Software</option>
                    <option value="Redes & Cableado Estructurado">Redes &amp; Cableado Estructurado</option>
                    <option value="Consultoría Tecnológica">Consultoría Tecnológica</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-[#334155]">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#f7f9fb] border border-[#c6c6cd] rounded px-4 py-3 text-[15px] text-[#191c1e] placeholder-gray-400 focus:outline-none focus:border-[#0051d5] focus:ring-1 focus:ring-[#0051d5] transition-colors resize-none"
                  placeholder="Cuéntanos brevemente sobre tus necesidades..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-[#000000] text-white text-[14px] font-semibold tracking-wide px-8 py-4 rounded hover:bg-[#1f2937] transition-all self-start flex items-center gap-2 disabled:opacity-70 shadow-sm"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

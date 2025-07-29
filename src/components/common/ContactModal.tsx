"use client";
import { useGetContactQuery } from "@/redux/api/contactApi";
import { X, Mail, AlertCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Contact {
  email: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { data } = useGetContactQuery();
  // console.log(data?.data?.[0]?.email);
  const contact = data?.data?.[0] as Contact;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in-0 duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-12 -translate-x-12"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 group"
          >
            <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
          </button>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
            <p className="text-red-100">
              Send us an email for any questions or to get started now
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full -translate-y-10 translate-x-10"></div>

            <div className="relative z-10">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">
                    Form Currently Unavailable
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Please reach out to us directly via email:
                  </p>
                </div>
              </div>

              <div className="bg-white text-[9px] md:text-[16px] rounded-lg md:p-4 p-2 border border-red-200">
                <a
                  href={`mailto:${contact?.email}`}
                  className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{contact?.email}</span>
                </a>
              </div>

              <p className="text-sm text-gray-600 mt-3 italic">
                We apologize for the inconvenience and will respond within 24
                hours.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
             href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact?.email}&su=Support&body=Hello`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-red-500/25 group"
            >
              <span className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Send Email</span>
              </span>
            </a>

            <button
              onClick={onClose}
              className="flex-1 bg-white hover:bg-gray-50 text-black font-semibold py-3 px-6 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

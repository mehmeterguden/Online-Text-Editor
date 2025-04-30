import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiX, FiSend, FiSmile, FiMail, FiMessageSquare, FiStar, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

interface SuggestionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuggestionForm = ({ isOpen, onClose }: SuggestionFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    wantsEmail: false,
    privacyPolicyAccepted: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showEmailMessage, setShowEmailMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.privacyPolicyAccepted) {
      setError('Gizlilik politikasını kabul etmelisiniz');
      return;
    }

    if (formData.wantsEmail && !formData.email) {
      setShowEmailMessage(true);
      setTimeout(() => setShowEmailMessage(false), 10000);
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: formData.name || 'Anonim Kullanıcı',
        from_email: formData.email || 'anonim@metineditoru.com',
        message: formData.message,
        wants_email: formData.wantsEmail ? 'Evet' : 'Hayır',
        email_preference: formData.wantsEmail ? 'E-posta yoluyla yanıt almak istiyor' : 'E-posta yoluyla yanıt almak istemiyor'
      };

      const result = await emailjs.send(
        'service_pzobouh',
        'template_m6410tq',
        templateParams,
        '5ByANmD3ONvRcET6N'
      );

      if (result.text === 'OK') {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 10000);
        setFormData({
          name: '',
          email: '',
          message: '',
          wantsEmail: false,
          privacyPolicyAccepted: false
        });
      }
    } catch (err) {
      setError('Geri bildiriminiz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`w-full max-w-2xl transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-300`}>
        {/* Üst Kısım - Başlık Kartı */}
        <div className="bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-600 dark:to-violet-600 rounded-t-2xl p-6 shadow-lg">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <FiStar className="text-yellow-300 w-6 h-6" />
                </div>
                <div className="text-xl font-bold text-white">
                  Görüşlerinizi Bildir!
                </div>
              </div>
              <div className="ml-11">
                <p className="text-white/90 text-sm leading-relaxed">
                  Platformumuzu geliştirmek için her görüşünüz bizim için değerli. İster yeni bir özellik önerisi, ister hata bildirimi, ister genel bir geri bildirim olsun - tüm mesajlarınızı dikkatle inceliyor ve hızlıca hayata geçiriyoruz.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <FiX className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Alt Kısım - Form Kartı */}
        <div className="bg-white dark:bg-gray-800 rounded-b-2xl p-6 shadow-xl space-y-4 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Uyarı Mesajları */}
            <div className="space-y-2">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-100 px-4 py-3 rounded-xl flex items-center gap-3 border-2 border-red-100 dark:border-red-800 animate-fade-in">
                  <div className="bg-red-100 dark:bg-red-800/50 p-2 rounded-lg">
                    <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {showEmailMessage && (
                <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100 px-4 py-3 rounded-xl flex items-center gap-3 border-2 border-blue-100 dark:border-blue-800 animate-fade-in">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-lg">
                    <FiMail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm">E-posta yoluyla yanıt almak istiyorsanız, e-posta adresinizi girmelisiniz</span>
                </div>
              )}

              {showSuccessMessage && (
                <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-100 px-4 py-3 rounded-xl flex items-center gap-3 border-2 border-green-100 dark:border-green-800 animate-fade-in">
                  <div className="bg-green-100 dark:bg-green-800/50 p-2 rounded-lg">
                    <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm">Geri bildiriminiz için teşekkürler! En kısa sürede inceleyip gerekli aksiyonları alacağız.</span>
                </div>
              )}
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSmile className="text-blue-400 dark:text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <input
                type="text"
                placeholder="İsminiz (Opsiyonel)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all text-base hover:border-blue-400 dark:hover:border-blue-400"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiMail className="text-blue-400 dark:text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <input
                type="email"
                placeholder="E-posta Adresiniz (Opsiyonel)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all text-base hover:border-blue-400 dark:hover:border-blue-400"
              />
            </div>

            <div className="relative group">
              <div className="absolute top-3 left-4">
                <FiMessageSquare className="text-blue-400 dark:text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <textarea
                placeholder="Görüş, öneri veya hata bildiriminizi buraya yazabilirsiniz *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all resize-none text-base hover:border-blue-400 dark:hover:border-blue-400"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center p-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-400 transition-all">
                <input
                  type="checkbox"
                  id="wantsEmail"
                  checked={formData.wantsEmail}
                  onChange={(e) => setFormData({ ...formData, wantsEmail: e.target.checked })}
                  className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                />
                <label htmlFor="wantsEmail" className="ml-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  E-posta yoluyla yanıt almak istiyorum
                </label>
              </div>

              <div className="flex items-center p-3 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:border-blue-400 dark:hover:border-blue-400 transition-all">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  checked={formData.privacyPolicyAccepted}
                  onChange={(e) => setFormData({ ...formData, privacyPolicyAccepted: e.target.checked })}
                  className="h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  required
                />
                <label htmlFor="privacyPolicy" className="ml-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('showPrivacyPolicy'));
                  }} className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                    Gizlilik politikasını
                  </a> okudum ve kabul ediyorum <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-600 dark:to-violet-600 hover:from-blue-600 hover:to-violet-600 dark:hover:from-blue-700 dark:hover:to-violet-700 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend className="w-4 h-4" />
                    <span>Gönder</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 
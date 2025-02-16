import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiX, FiSend, FiSmile, FiMail, FiMessageSquare, FiStar } from 'react-icons/fi';

interface SuggestionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuggestionForm = ({ isOpen, onClose }: SuggestionFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !message) {
      setError('E-posta ve mesaj alanları zorunludur.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        'service_pzobouh',
        'template_m6410tq',
        {
          from_name: name || 'Anonim Kullanıcı',
          from_email: email,
          message: message,
          to_email: 'mehmetergudencom@gmail.com',
        },
        '5ByANmD3ONvRcET6N'
      );

      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`w-full max-w-2xl transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} transition-all duration-300`}>
        {/* Üst Kısım - Başlık Kartı */}
        <div className="bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-600 dark:to-violet-600 rounded-t-2xl p-8 shadow-lg">
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <FiStar className="text-yellow-300 w-7 h-7" />
                </div>
                <div className="text-2xl font-bold text-white">
                  Görüşlerinizi Bildir!
                </div>
              </div>
              <div className="ml-12">
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
        <div className="bg-white dark:bg-gray-800 rounded-b-2xl p-8 shadow-xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSmile className="text-blue-400 dark:text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <input
                type="text"
                placeholder="İsminiz (Opsiyonel)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all text-base hover:border-blue-400 dark:hover:border-blue-400"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiMail className="text-blue-400 dark:text-blue-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              <input
                type="email"
                placeholder="E-posta Adresiniz *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all text-base hover:border-blue-400 dark:hover:border-blue-400"
              />
            </div>

            <div className="relative group">
              <textarea
                placeholder="Görüş, öneri veya hata bildiriminizi buraya yazabilirsiniz *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all resize-none text-base hover:border-blue-400 dark:hover:border-blue-400"
              />
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/30 text-red-500 text-sm p-4 rounded-xl flex items-center gap-3 border-2 border-red-100 dark:border-red-800">
                <div className="bg-red-100 dark:bg-red-800/50 p-2 rounded-lg">⚠️</div>
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 dark:bg-green-900/30 text-green-500 text-sm p-4 rounded-xl flex items-center gap-3 border-2 border-green-100 dark:border-green-800">
                <div className="bg-green-100 dark:bg-green-800/50 p-2 rounded-lg">✨</div>
                Geri bildiriminiz için teşekkürler! En kısa sürede inceleyip gerekli aksiyonları alacağız.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-violet-500 dark:from-blue-600 dark:to-violet-600 hover:from-blue-600 hover:to-violet-600 dark:hover:from-blue-700 dark:hover:to-violet-700 text-white font-medium py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-lg hover:shadow-xl group"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Gönder</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}; 
export default function Success() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center max-w-md px-6">
                <div className="mb-8">
                    <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h1 className="font-heading font-bold text-4xl text-aerialix-dark mb-4">
                    Mesajınız Gönderildi!
                </h1>
                <p className="font-sans text-lg text-zinc-600 mb-8">
                    Teşekkürler! En kısa sürede size geri dönüş yapacağız.
                </p>
                <a
                    href="/"
                    className="inline-block bg-aerialix-dark text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                >
                    Ana Sayfaya Dön
                </a>
            </div>
        </div>
    );
}

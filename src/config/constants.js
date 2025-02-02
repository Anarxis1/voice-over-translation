const translateFuncParam = 0x40_75_50_00_00_00_00_00;
const availableLangs = {
  ru: "Russian",
  en: "English",
  zh: "Chinese",
  fr: "French",
  it: "Italian",
  es: "Spanish",
  de: "German",
}; // available languages for translation
const siteTranslates = {
  youtube: "https://youtu.be/",
  twitch: "https://twitch.tv/",
  vimeo: "https://vimeo.com/",
  "9gag": "https://9gag.com/gag/",
  vk: "https://vk.com/video?z=",
  xvideos: "https://www.xvideos.com/",
  pornhub: "https://rt.pornhub.com/view_video.php?viewkey=",
  udemy: "https://www.udemy.com",
  twitter: "https://twitter.com/i/status/",
  facebook: "https://www.facebook.com/",
  rutube: "https://rutube.ru/video/",
  "bilibili.com": "https://www.bilibili.com/video/",
  "mail.ru": "https://my.mail.ru/",
  coub: "https://coub.com/view/"
};
const translations = {
  ru: {
    recommended: "рекомендуется",
    translateVideo: "Перевести видео",
    disableTranslate: "Выключить",
    translationSettings: "Настройки перевода",
    resetSettings: "Сбросить настройки",
    videoBeingTranslated: "Видео переводится",
    videoLanguage: "Язык видео",
    translationLanguage: "Язык перевода",
    translationTake: "Перевод займёт",
    translationTakeMoreThanHour: "Перевод займёт больше часа",
    translationTakeAboutMinute: "Перевод займёт около минуты",
    translationTakeFewMinutes: "Перевод займёт несколько минут",
    translationTakeApproximatelyMinutes: "Перевод займёт примерно {0} минут",
    translationTakeApproximatelyMinute: "Перевод займёт примерно {0} минуты",
    unSupportedExtensionError: `Ошибка! ${GM_info.scriptHandler} не поддерживается этой версией расширения!\n\nПожалуйста, используйте cloudflare-версию расширения VOT.`,
    requestTranslationFailed: "Не удалось запросить перевод видео",
    audioNotReceived: "Не получена ссылка на аудио",
    grantPermissionToAutoPlay: "Предоставьте разрешение на автовоспроизведение",
    neededAdditionalExtension:
      "Для поддержки этого сайта необходимо дополнительное расширение",
    audioFormatNotSupported: "Формат аудио не поддерживается",
    VOTAutoTranslate: "Переводить при открытии",
    VOTDontTranslateRu: "Не переводить с русского",
    VOTVolume: "Громкость видео",
    VOTVolumeTranslation: "Громкость перевода",
    VOTAutoSetVolume: "Уменьшать громкость видео до ",
    VOTShowVideoSlider: "Слайдер громкости видео",
    VOTSyncVolume: "Связать громкость перевода и видео",
    VOTAudioProxy: "Проксировать полученное аудио",
    VOTDisableRussian: "VOT: Вы отключили перевод русскоязычных видео",
    VOTLiveNotSupported:
      "VOT: Не поддерживается перевод трансляций в прямом эфире",
    VOTPremiere: "VOT: Дождитесь окончания премьеры перед переводом",
    VOTVideoIsTooLong: "VOT: Видео слишком длинное",
    VOTNoVideoIDFound: "VOT: Не найдено ID видео",
    VOTFailedInitDB: "VOT: Не удалось инициализовать базу данных",
    VOTDBNeedUpdate:
      "VOT: Базе данных нужно обновление, пожалуйста, перезагрузите страницу",
    VOTDisabledForDBUpdating: `VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с ${window.location.hostname} и попробуйте снова`,
    VOTFailedWriteToDB: "VOT: Не удалось записать данные в базу данных",
    VOTFailedReadFromDB: "VOT: Не удалось получить данные из базы данных",
    Russian: "Русский",
    English: "Английский",
    Chinese: "Китайский",
    French: "Французский",
    Italian: "Итальянский",
    Spanish: "Испанский",
    German: "Немецкий",
  },
  en: {
    recommended: "recommended",
    translateVideo: "Translate video",
    disableTranslate: "Turn off",
    translationSettings: "Translation settings",
    resetSettings: "Reset settings",
    videoBeingTranslated: "The video is being translated",
    videoLanguage: "Video language",
    translationLanguage: "Translation language",
    translationTake: "The translation will take",
    translationTakeMoreThanHour: "The translation will take more than an hour",
    translationTakeAboutMinute: "The translation will take about a minute",
    translationTakeFewMinutes: "The translation will take a few minutes",
    translationTakeApproximatelyMinutes:
      "The translation will take approximately {0} minutes",
    translationTakeApproximatelyMinute:
      "The translation will take approximately {0} minutes",
    unSupportedExtensionError: `Error! ${GM_info.scriptHandler} is not supported by this version of the extension!\n\nPlease use the cloudflare version of the VOT extension.`,
    requestTranslationFailed: "Failed to request video translation",
    audioNotReceived: "Audio link not received",
    grantPermissionToAutoPlay: "Grant permission to autoplay",
    neededAdditionalExtension:
      "An additional extension is needed to support this site",
    audioFormatNotSupported: "The audio format is not supported",
    VOTAutoTranslate: "Translate on open",
    VOTDontTranslateRu: "Don't translate from Russian",
    VOTVolume: "Video volume",
    VOTVolumeTranslation: "Translation Volume",
    VOTAutoSetVolume: "Reduce video volume to ",
    VOTShowVideoSlider: "Video volume slider",
    VOTSyncVolume: "Link translation and video volume",
    VOTAudioProxy: "Proxy received audio",
    VOTDisableRussian:
      "VOT: You have disabled the translation of Russian videos",
    VOTLiveNotSupported: "VOT: Translation of live streams is not supported",
    VOTPremiere: "VOT: Wait for the premiere to end before translating",
    VOTVideoIsTooLong: "VOT: Video is too long",
    VOTNoVideoIDFound: "VOT: No video ID found",
    VOTFailedInitDB: "VOT: Failed to initialize database",
    VOTDBNeedUpdate:
      "VOT: The database needs an update, please reload the page",
    VOTDisabledForDBUpdating: `VOT is disabled due to an error when updating the Database. Close all open tabs with ${window.location.hostname} and try again`,
    VOTFailedWriteToDB: "VOT: Data could not be written to the database",
    VOTFailedReadFromDB: "VOT: Data could not be retrieved from the database",
    Russian: "Russian",
    English: "English",
    Chinese: "Chinese",
    French: "French",
    Italian: "Italian",
    Spanish: "Spanish",
    German: "German",
  },
  zh: {
    recommended: "推荐使用",
    translateVideo: "翻译视频",
    disableTranslate: "关掉",
    translationSettings: "翻译需要一个多小时",
    resetSettings: "重置设置",
    videoBeingTranslated: "视频正在翻译中",
    videoLanguage: "视频语言",
    translationLanguage: "翻译语言",
    translationTake: "翻译将采取",
    translationTakeMoreThanHour: "翻译将采取一个多小时",
    translationTakeAboutMinute: "翻译将采取一分钟",
    translationTakeFewMinutes: "翻译将采取几分钟",
    translationTakeApproximatelyMinutes: "翻译将采取大约需要{0}分钟",
    translationTakeApproximatelyMinute: "翻译将采取大约需要{0}分钟",
    unSupportedExtensionError: `错误! 此版本的扩展不支持 ${GM_info.scriptHandler}!\n\n请使用cloudflare版本的VOT扩展.`,
    requestTranslationFailed: "请求视频翻译失败",
    audioNotReceived: "未收到音频链接",
    grantPermissionToAutoPlay: "授予自动播放权限",
    neededAdditionalExtension: "需要一个额外的扩展来支持这个网站",
    audioFormatNotSupported: "不支持音频格式",
    VOTAutoTranslate: "打开时翻译",
    VOTDontTranslateRu: "不要从俄语翻译",
    VOTVolume: "视频量",
    VOTVolumeTranslation: "翻译量",
    VOTAutoSetVolume: "将视频音量降低到",
    VOTShowVideoSlider: "视频音量滑块",
    VOTSyncVolume: "链接翻译和视频音量",
    VOTAudioProxy: "代理接收的音频",
    VOTDisableRussian: "VOT：您已禁用俄语视频的翻译",
    VOTLiveNotSupported: "VOT：不支持直播流的翻译",
    VOTPremiere: "VOT：等待首映结束后再翻译",
    VOTVideoIsTooLong: "VOT：视频太长",
    VOTNoVideoIDFound: "VOT: 没有找到视频ID",
    VOTFailedInitDB: "VOT: 初始化数据库失败",
    VOTDBNeedUpdate: "VOT: 数据库需要更新,请重新加载页面",
    VOTDisabledForDBUpdating: `VOT由于更新数据库时出错而被禁用。 关闭所有打开的选项卡${window.location.hostname} 再试一次`,
    VOTFailedWriteToDB: "VOT: 无法将数据写入数据库",
    VOTFailedReadFromDB: "VOT: 无法从数据库中检索数据",
    Russian: "俄语",
    English: "英语",
    Chinese: "中文",
    French: "法语",
    Italian: "意大利语",
    Spanish: "西班牙语",
    German: "德语",
  },
  de: {
    recommended: "es wird empfohlen",
    translateVideo: "Video übersetzen",
    disableTranslate: "Ausschalten",
    translationSettings: "Übersetzungseinstellungen",
    resetSettings: "Einstellungen zurücksetzen",
    videoBeingTranslated: "Das Video wird übersetzt",
    videoLanguage: "Sprache Video",
    translationLanguage: "Zielsprache",
    translationTake: "Die Übersetzung dauert",
    translationTakeMoreThanHour: "Die Übersetzung dauert mehr als eine Stunde",
    translationTakeAboutMinute: "Die Übersetzung dauert ungefähr eine Minute",
    translationTakeFewMinutes: "Die Übersetzung dauert einige Minuten",
    translationTakeApproximatelyMinutes:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    translationTakeApproximatelyMinute:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    unSupportedExtensionError: `Fehler! ${GM_info.scriptHandler} wird von dieser Version der Erweiterung nicht unterstützt!\n\nBitte verwenden Sie die Cloudflare-Version der VOT-Erweiterung.`,
    requestTranslationFailed:
      "Videoübersetzung konnte nicht angefordert werden",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay:
      "Erteilen Sie die Berechtigung zur automatischen Wiedergabe",
    neededAdditionalExtension:
      "Eine zusätzliche Erweiterung ist erforderlich, um diese Website zu unterstützen",
    audioFormatNotSupported: "Das Audioformat wird nicht unterstützt",
    VOTAutoTranslate: "Beim Öffnen übersetzen",
    VOTDontTranslateRu: "Nicht aus dem Russischen übersetzen",
    VOTVolume: "Video Lautstärke",
    VOTVolumeTranslation: "Übersetzungsvolumen",
    VOTAutoSetVolume: "Video-Lautstärke auf reduzieren ",
    VOTShowVideoSlider: "Video-Lautstärkeregler",
    VOTSyncVolume: "Übersetzungs- und Videolautstärke verknüpfen",
    VOTAudioProxy: "Empfangenes Audio proxyen",
    VOTDisableRussian:
      "VOT: Sie haben die Übersetzung von russischen Videos deaktiviert",
    VOTLiveNotSupported:
      "VOT: Übersetzung von Live-Streams wird nicht unterstützt",
    VOTPremiere:
      "VOT: Warten Sie, bis die Premiere beendet ist, bevor Sie übersetzen",
    VOTVideoIsTooLong: "VOT: Video ist zu lang",
    VOTNoVideoIDFound: "VOT: Keine Video-ID gefunden",
    VOTFailedInitDB: "VOT: Datenbank konnte nicht initialisiert werden",
    VOTDBNeedUpdate:
      "VOT: Die Datenbank muss aktualisiert werden, bitte laden Sie die Seite neu",
    VOTDisabledForDBUpdating: `VOT wurde aufgrund eines Fehlers beim Aktualisieren der Datenbank deaktiviert. Schließen Sie alle geöffneten Tabs mit ${window.location.hostname} und versuchen Sie es erneut`,
    VOTFailedWriteToDB:
      "VOT: Daten konnten nicht in die Datenbank geschrieben werden",
    VOTFailedReadFromDB: "VOT: Konnte keine Daten aus der Datenbank abrufen",
    Russian: "Russisch",
    English: "Englisch",
    Chinese: "Chinesisch",
    French: "Französisch",
    Italian: "Italienisch",
    Spanish: "Spanisch",
    German: "Deutsch",
  },
  es: {
    recommended: "es recomendable",
    translateVideo: "Traducir video",
    disableTranslate: "Apagar",
    translationSettings: "Ajustes de traducción",
    resetSettings: "Restablecer ajustes",
    videoBeingTranslated: "El video está siendo traducido",
    videoLanguage: "Idioma del video",
    translationLanguage: "Idioma de la traducción",
    translationTake: "La traducción tardará",
    translationTakeMoreThanHour: "La traducción tardará más de una hora",
    translationTakeAboutMinute:
      "La traducción tardará aproximadamente un minuto",
    translationTakeFewMinutes: "La traducción tardará unos minutos",
    translationTakeApproximatelyMinutes:
      "La traducción tardará aproximadamente {0} minutos",
    translationTakeApproximatelyMinute:
      "La traducción tardará aproximadamente {0} minutos",
    unSupportedExtensionError: `Error! ${GM_info.scriptHandler} no es compatible con esta versión de la extensión!\n\nUtilice la versión cloudflare de la extensión VOT.`,
    requestTranslationFailed: "Error al solicitar la traducción de vídeo",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay: "Conceder permiso de reproducción automática",
    neededAdditionalExtension:
      "Se necesita una extensión adicional para admitir este sitio",
    audioFormatNotSupported: "El formato de audio no es compatible",
    VOTAutoTranslate: "Traducir al abrir",
    VOTDontTranslateRu: "No traducir del ruso",
    VOTVolume: "Volumen de vídeo",
    VOTVolumeTranslation: "Volumen de traducción",
    VOTAutoSetVolume: "Reducir el volumen del video al ",
    VOTShowVideoSlider: "Deslizador de volumen de video",
    VOTSyncVolume: "Vincular el volumen de traducción y video",
    VOTAudioProxy: "Proxificar el audio recibido",
    VOTDisableRussian: "VOT: Has desactivado la traducción de videos en ruso",
    VOTLiveNotSupported:
      "VOT: No se admite la traducción de transmisiones en vivo",
    VOTPremiere: "VOT: Espere a que termine el estreno antes de traducir",
    VOTVideoIsTooLong: "VOT: El video es demasiado largo",
    VOTNoVideoIDFound: "VOT: No se encontró id de video",
    VOTFailedInitDB: "VOT: No se pudo inicializar la base de datos",
    VOTDBNeedUpdate:
      "VOT: la Base de datos necesita una actualización, por favor vuelva a cargar la página",
    VOTDisabledForDBUpdating: `VOT está deshabilitado debido a un error al actualizar la Base de Datos. Cierre todas las pestañas abiertas con ${window.location.hostname} y vuelve a intentarlo`,
    VOTFailedWriteToDB: "VOT: No se pudo escribir datos en la base de datos",
    VOTFailedReadFromDB: "VOT: No se pudo recuperar datos de la base de datos",
    Russian: "Ruso",
    English: "Inglés",
    Chinese: "Chino",
    French: "Francés",
    Italian: "Italiano",
    Spanish: "Español",
    German: "Alemán",
  },
  fr: {
    recommended: "recommande",
    translateVideo: "Traduire la vidéo",
    disableTranslate: "Désactiver",
    translationSettings: "Paramètres de traduction",
    resetSettings: "Réinitialiser les paramètres",
    videoBeingTranslated: "La vidéo est en cours de traduction",
    videoLanguage: "Langue vidéo",
    translationLanguage: "Langue cible",
    translationTake: "La traduction prendra",
    translationTakeMoreThanHour: "La traduction prendra plus d'une heure",
    translationTakeAboutMinute: "La traduction prendra environ une minute",
    translationTakeFewMinutes: "La traduction prendra quelques minutes",
    translationTakeApproximatelyMinutes:
      "La traduction prendra environ {0} minutes",
    translationTakeApproximatelyMinute:
      "La traduction prendra environ {0} minutes",
    unSupportedExtensionError: `Erreur! ${GM_info.scriptHandler} n'est pas supporté par cette version de l'extension!!\n\nVeuillez utiliser la version cloudflare de l'extension VOT.`,
    requestTranslationFailed:
      "Impossible de demander la traduction de la vidéo",
    audioNotReceived: "Lien audio non reçu",
    grantPermissionToAutoPlay: "Accorder l'autorisation de lecture automatique",
    neededAdditionalExtension:
      "Une extension supplémentaire est nécessaire pour prendre en charge ce site",
    audioFormatNotSupported: "Format audio non pris en charge",
    VOTAutoTranslate: "Traduire à l'ouverture",
    VOTDontTranslateRu: "Ne pas traduire du russe",
    VOTVolume: "Volume de la vidéo",
    VOTVolumeTranslation: "Volume de traduction",
    VOTAutoSetVolume: "Réduire le volume de la vidéo à ",
    VOTShowVideoSlider: "Curseur de volume vidéo",
    VOTSyncVolume: "Lier le volume de la traduction et de la vidéo",
    VOTAudioProxy: "Proxy audio reçu",
    VOTDisableRussian:
      "VOT: Vous avez désactivé la traduction des vidéos en russe",
    VOTLiveNotSupported:
      "VOT: La traduction des flux en direct n'est pas prise en charge",
    VOTPremiere: "VOT: Attendez la fin de la première avant de traduire",
    VOTVideoIsTooLong: "VOT: La vidéo est trop longue",
    VOTNoVideoIDFound: "VOT: ID vidéo introuvable",
    VOTFailedInitDB: "VOT: Impossible d'initialiser la base de données",
    VOTDBNeedUpdate:
      "VOT: la Base de données a besoin d'une mise à jour, veuillez recharger la page",
    VOTDisabledForDBUpdating: `VOT est désactivé en raison d'une erreur lors de la mise à jour de la Base de Données. Fermez tous les onglets ouverts avec ${window.location.hostname} et essayez à nouveau`,
    VOTFailedWriteToDB:
      "VOT: Impossible d'écrire les données dans la base de données",
    VOTFailedReadFromDB:
      "VOT: Impossible de récupérer les données de la base de données",
    Russian: "Russe",
    English: "Anglais",
    Chinese: "Chinois",
    French: "Français",
    Italian: "Italien",
    Spanish: "Espagnol",
    German: "Allemand",
  },
  it: {
    recommended: "è consigliabile",
    translateVideo: "Traduci il video",
    disableTranslate: "Spegnere",
    translationSettings: "Impostazioni di traduzione",
    resetSettings: "Ripristina impostazioni",
    videoBeingTranslated: "Il video è in fase di traduzione",
    videoLanguage: "Lingua Video",
    translationLanguage: "Lingua di traduzione",
    translationTake: "La traduzione richiederà",
    translationTakeMoreThanHour: "La traduzione richiederà più di un'ora",
    translationTakeAboutMinute: "La traduzione richiederà circa un minuto",
    translationTakeFewMinutes: "La traduzione richiederà alcuni minuti",
    translationTakeApproximatelyMinutes:
      "La traduzione richiederà circa {0} minuti",
    translationTakeApproximatelyMinute:
      "La traduzione richiederà circa {0} minuti",
    unSupportedExtensionError: `Errore! ${GM_info.scriptHandler} non è supportato da questa versione dell'estensione!\n\nUtilizzare la versione cloudflare dell'estensione VOT.`,
    requestTranslationFailed: "Richiesta di traduzione video non riuscita",
    audioNotReceived: "Collegamento audio non ricevuto",
    grantPermissionToAutoPlay:
      "Concedere l'Autorizzazione per la riproduzione automatica",
    neededAdditionalExtension:
      "Per supportare questo sito è necessaria un'estensione aggiuntiva",
    audioFormatNotSupported: "Il formato audio non è supportato",
    VOTAutoTranslate: "Traduci all'apertura",
    VOTDontTranslateRu: "Non tradurre dal russo",
    VOTVolume: "Volume video",
    VOTVolumeTranslation: "Volume di traduzione",
    VOTAutoSetVolume: "Riduci il volume del video al ",
    VOTShowVideoSlider: "Cursore del volume del video",
    VOTSyncVolume: "Collega il volume della traduzione e del video",
    VOTAudioProxy: "Proxy audio ricevuto",
    VOTDisableRussian: "VOT: Hai disabilitato la traduzione dei video in russo",
    VOTLiveNotSupported:
      "VOT: La traduzione dei flussi dal vivo non è supportata",
    VOTPremiere: "VOT: Aspetta che la prima finisca prima di tradurre",
    VOTVideoIsTooLong: "VOT: Il video è troppo lungo",
    VOTNoVideoIDFound: "VOT: ID video non trovato",
    VOTFailedInitDB: "VOT: Impossibile inizializzare il database",
    VOTDBNeedUpdate:
      "VOT: Il database ha bisogno di aggiornamento, si prega di ricaricare la pagina",
    VOTDisabledForDBUpdating: `VOT è disabilitato a causa di un errore durante l'aggiornamento del database. CHIUDI tutte le schede aperte con ${window.location.hostname} e riprova`,
    VOTFailedWriteToDB: "VOT: Impossibile scrivere dati nel database",
    VOTFailedReadFromDB: "VOT: Impossibile recuperare i dati dal database",
    Russian: "Russo",
    English: "Inglese",
    Chinese: "Cinese",
    French: "Francese",
    Italian: "Italiano",
    Spanish: "Spagnolo",
    German: "Tedesco",
  },
};

export { translateFuncParam, availableLangs, siteTranslates, translations };

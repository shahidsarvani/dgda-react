class Translator {
    constructor(lang) { 
      this.lang = this.isEmpty(lang) ? 'en' : lang;               // NOTE: size and brand are arguments
      this.en = {
        'HOME': 'MAIN PAGE',
        'BACK': 'BACK',
        'MODEL': 'MODEL',
        'LIGHTS': 'LIGHTS',
        'VIDEO_WALL': 'VIDEO WALLS',
        'DIRIYAH': 'Diriyah',
        'WADISAFER': 'Wadi Safer',
        'STARTSHOW': 'START SHOW',
        'MODEL_DISTRICTS': 'MODEL DISTRICTS',
        'BASEMENT_FLOORS': 'BASEMENT FLOORS',
        'UP': 'UP',
        'DOWN': 'DOWN',
        'ENGLISH': 'ENGLISH',
        'ARABIC': 'ARABIC'
      };
      this.ar = {
        'HOME': 'الصفحة الرئيسية',
        'BACK': 'خلف',
        'MODEL': 'المجسم',
        'LIGHTS': 'الإضاءات',
        'VIDEO_WALL': 'الشاشات الجدارية',
        'DIRIYAH': 'الدرعية',
        'WADISAFER': 'وادي صفر',
        'STARTSHOW': 'بدء العرض',
        'MODEL_DISTRICTS': 'مناطق المجسم',
        'BASEMENT_FLOORS': 'الطوابق السفلية',
        'UP': 'للأعلى',
        'DOWN': 'للأسفل',
        'ENGLISH': 'إنجليزي',
        'ARABIC': 'عربي'
      }
    }
  
  
    isEmpty(str) {
      return (!str || str.length === 0 );
    }
    T(txt) {
      if(this.lang === 'en') {
        return this.en[txt];
      }
      if(this.lang === 'ar') {
        return this.ar[txt];
      }
    }
  }
  export default Translator
import IPlatform from '../platforms/IPlatform';
import Live from './Live';

export default class AdvancedLive extends Live {
  constructor(platform: IPlatform) {
    super(platform);
  }
  subtitles() {
    console.log('Legendas ativadas na transmissão');
  }

  comments() {
    console.log('Comentários liberados na Live');
  }
}

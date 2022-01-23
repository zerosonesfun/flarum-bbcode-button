import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import TextEditor from 'flarum/common/components/TextEditor';
import TextEditorButton from 'flarum/common/components/TextEditorButton';
import insertAtCursor from './BBCode';

app.initializers.add('zerosonesfun/bbcode-button', () => {

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add(
          'bbcode',
          <TextEditorButton onclick={() => insertAtCursor()} icon={app.forum.attribute('zerosonesfun-bbcode-button.icon')}>
            {app.translator.trans('flarum-bbcode-button.forum.composer.bbcode_tooltip')}
          </TextEditorButton>
        );
      });
});
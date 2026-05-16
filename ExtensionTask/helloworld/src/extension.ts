import * as vscode from 'vscode';
import markdownItContainer from 'markdown-it-container';

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      md.use(markdownItContainer, 'alert', {
        validate: () => true,
        render: (tokens: any, idx: number) => {
          return tokens[idx].nesting === 1 ? '<div class="alert">' : '</div>';
        }
      });

      md.use(markdownItContainer, 'spoiler', {
        validate: () => true,
        render: (tokens: any, idx: number) => {
          if (tokens[idx].nesting === 1) {
            return '<details class="spoiler"><summary>Нажмите, чтобы раскрыть</summary>';
          } else {
            return '</details>';
          }
        }
      });

      return md;
    }
  };
}

export function deactivate() {}
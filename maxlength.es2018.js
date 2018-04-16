class Maxlength {
        constructor(selector){
          $(selector).keyup((e) => this.handler(e)).keydown((e) => this.handler(e)).focus((e) => this.handler(e)).focusout((e) => {
                $('div.--maxlength').css('display', 'none')
            })
        }
  
        handler(e) {
            let max = $(e.target).attr('maxlength')
            let current = $(e.target).val().length
            let top = $(e.target).position().top + $(e.target).outerHeight(true)
            let left = $(e.target).position().left + $(e.target).width() / 2.5
            if ($('div.--maxlength').length == 0) $('body').append('<div class="--maxlength"></div>')
            $('div.--maxlength').css('display', 'block')
            $('div.--maxlength').text(current + ' / ' + max)
            $('div.--maxlength').css('top', top)
            $('div.--maxlength').css('left', left)
        }

    }

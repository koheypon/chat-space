$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
               `<div class="message">
                  <div class="message__name">
                    <div class="message__name--date">
                      ${message.user_name}
                    </div>
                    <div class="message__name--time">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="message__text">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                  </div>
                  <img src=${message.image} >
              </div>`
      return html;
    } else {
      var html =
       `<div class="message">
          <div class="message__name">
            <div class="message__name--date">
              ${message.user_name}
            </div>
            <div class="message__name--time">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.body').append(html);
      $('form')[0].reset();
      $('.body').animate({ scrollTop: $('.body')[0].scrollHeight});
      $('.input-btn').prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })

  function buildHTML(message){
    if ( message.image ) {
        //data-idが反映されるようにしている
        var html =
         `<div class="message" data-message-id=${message.id}>
            <div class="message__name">
              <div class="message__name--data">
                ${message.user_name}
              </div>
              <div class="message__name--time">
                ${message.created_at}
              </div>
            </div>
            <div class="message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src=${message.image} >
          </div>`
        return html;
      } else {
        //同様にdata-idが反映されるようにしている
        var html =
         `<div class="message" data-message-id=${message.id}>
            <div class="message__name">
              <div class="message__name--date">
                ${message.user_name}
              </div>
              <div class="message__name--time">
                ${message.created_at}
              </div>
            </div>
            <div class="message__text">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
      };
    }

  var reloadMessages = function() {
    var last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.body').append(insertHTML);
        $('.body').animate({ scrollTop: $('.body')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
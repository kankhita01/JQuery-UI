$(document).ready(function(){

    // draggable
    $("#draggable").draggable();

    // accordion
    $( "#accordion" ).accordion({
        collapsible: true
    });

    // Autocomplete
    var data = [
        "HTML", "CSS", "JAVA", "JAVASCRIPT", "JQUERY", "PYTHON", "C++", "PHP", "WORDPRESS"
    ]
    $( "#tags" ).autocomplete({
        source: data
    });

    // Selectable
    $( "#selectable" ).selectable();

    // Sortable
    $( "#sortable" ).sortable();

    // Resizable
    $( "#resizable" ).resizable();

    // Droppable
    $( "#dragg" ).draggable();
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
        }
    });

    // Datepicker
    $( "#datepicker" ).datepicker();

    // Checkboxradio
    $( "input" ).checkboxradio();
});

// Effect
$(document).ready(function(){
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
} );

// Selectmenu
$(document).ready(function(){
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
});

// Menu
$(document).ready( function() {
    $( "#menu" ).menu();
});

// Color Animation
$(document).ready( function() {
    var state = true;
    $( "#button_ani" ).on( "click", function() {
      if ( state ) {
        $( "#animation" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#animation" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
});

// Hide
$(document).ready(function(){
    // run the currently selected effect
    function runEffecth() {
      // get effect type from
      var selectEffect = $( "#effectTypes_h" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#hide" ).hide( selectEffect, options, 1000, callbackh );
    };
 
    // Callback function to bring a hidden box back
    function callbackh() {
      setTimeout(function() {
        $( "#hide" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button_h" ).on( "click", function() {
      runEffecth();
    });
});

// Tabs
$(document).ready(function(){
    $( "#tabs" ).tabs();
});


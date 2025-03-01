// Script to enable paste functionality in Monaco editor
document.addEventListener('DOMContentLoaded', function() {
  // Function to enable paste in Monaco editor
  function enablePasteInMonacoEditor() {
    // Find all textarea elements used by Monaco editor
    const textareas = document.querySelectorAll('textarea.inputarea');
    
    if (textareas.length > 0) {
      textareas.forEach(textarea => {
        // Remove any attributes that might prevent pasting
        textarea.removeAttribute('onpaste');
        
        // Ensure the textarea allows pasting
        textarea.addEventListener('paste', function(e) {
          // Make sure the paste event is not prevented
          e.stopPropagation();
        }, true);
      });
      
      console.log('Paste functionality enabled for Monaco editor');
    } else {
      // If textareas aren't found yet, try again later
      setTimeout(enablePasteInMonacoEditor, 1000);
    }
  }
  
  // Start the process
  enablePasteInMonacoEditor();
  
  // Also try again when the editor might be fully loaded
  setTimeout(enablePasteInMonacoEditor, 2000);
});

// Override the global paste event to ensure it's not blocked
const originalAddEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function(type, listener, options) {
  if (type === 'paste') {
    // Wrap the listener to ensure it doesn't prevent default
    const wrappedListener = function(event) {
      // Store the original preventDefault
      const originalPreventDefault = event.preventDefault;
      
      // Override preventDefault to do nothing
      event.preventDefault = function() {
        console.log('Prevented an attempt to block paste');
      };
      
      // Call the original listener
      listener.call(this, event);
      
      // Restore the original preventDefault
      event.preventDefault = originalPreventDefault;
    };
    
    // Call the original addEventListener with our wrapped listener
    return originalAddEventListener.call(this, type, wrappedListener, options);
  }
  
  // For all other event types, proceed normally
  return originalAddEventListener.call(this, type, listener, options);
}; 
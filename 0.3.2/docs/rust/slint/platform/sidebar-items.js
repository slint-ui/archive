window.SIDEBAR_ITEMS = {"enum":[["Key","The `Key` enum is used to map a specific key by name e.g. `Key::Control` to an internal used unicode representation. The enum is convertible to [`std::char`] and `slint::SharedString`. Use this with `slint::platform::WindowEvent` to supply key events to Slint’s platform abstraction."],["PointerEventButton","This enum describes the different types of buttons for a pointer event, typically on a mouse or a pencil."],["SetPlatformError","This enum describes the different error scenarios that may occur when [`set_platform`] fails."],["WindowEvent","A event that describes user input."]],"fn":[["duration_until_next_timer_update","Returns the duration before the next timer is expected to be activated. This is the largest amount of time that you can wait before calling [`update_timers_and_animations()`]."],["set_platform","Set the Slint platform abstraction."],["update_timers_and_animations","Call this function to update and potentially activate any pending timers, as well as advance the state of any active animtaions."]],"mod":[["software_renderer","This module contains the [`SoftwareRenderer`] and related types."]],"trait":[["EventLoopProxy","Trait that is returned by the [`Platform::new_event_loop_proxy`]"],["Platform","This trait defines the interface between Slint and platform APIs typically provided by operating and windowing systems."],["WindowAdapter","This trait represents the adaptation layer between the [`Window`] API, and the internal type from the backend that provides functionality such as device-independent pixels, window resizing, and other typically windowing system related tasks."]]};
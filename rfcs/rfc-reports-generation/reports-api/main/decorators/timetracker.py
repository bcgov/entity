import time


def timetracker(method):
    """
    Decorator for tracking the time around def invocation
    :param method:
    :return:
    """
    def time_tracker(*args, **kw):
        time_start = int(round(time.time() * 1000))
        result = method(*args, **kw)
        time_end = int(round(time.time() * 1000))
        def_path = '{}.{}.{}'.format(method.__module__,  args[0].__class__.__name__ , method.__name__)
        print("Def : {} took {} milliseconds".format(def_path, (time_end-time_start)))
        return result

    return time_tracker

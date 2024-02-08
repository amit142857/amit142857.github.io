import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:amit142857/src/features/experience/domain/experience.dart';
import 'package:amit142857/src/localization/generated/locale_keys.g.dart';
import 'package:amit142857/src/localization/json_list_translation.dart';
import 'package:amit142857/src/localization/locale_controller.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'experience_repository.g.dart';

@riverpod
ExperienceRepository experienceRepository(ExperienceRepositoryRef ref) {
  return ExperienceRepository(ref);
}

class ExperienceRepository {
  ExperienceRepository(this._ref);

  final Ref _ref;

  List<Experience> getExperiences() {
    final locale = _ref.watch(localeControllerProvider).locale;
    final jsonExperiences = trList(locale, LocaleKeys.experiences);
    final experiences = jsonExperiences.map((jsonExperience) {
      return Experience.fromJson(jsonExperience);
    }).toList();
    return experiences;
  }
}

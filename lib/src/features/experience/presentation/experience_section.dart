import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:amit142857/src/features/experience/presentation/experience_desktop.dart';
import 'package:amit142857/src/common/widgets/responsive.dart';

class ExperienceSection extends ConsumerWidget {
  const ExperienceSection({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const Responsive(
      desktop: ExperienceDesktop(),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:amit142857/src/features/about/presentation/about_desktop.dart';
import 'package:amit142857/src/common/widgets/responsive.dart';

class AboutSection extends ConsumerWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return const Responsive(
      desktop: AboutDesktop(),
    );
  }
}
